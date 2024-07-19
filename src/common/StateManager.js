/* global SillyTavern */
import _ from 'lodash';
import { DEFAULT_TEMPLATE, DEFAULT_RESOURCE } from './data'
import Helper from './Helper'

const DEFAULT = {
    template: DEFAULT_TEMPLATE,
    resource: DEFAULT_RESOURCE,
};

export const TEMPLATE_KEY_REGEX = /^[\w ]*:/g;
export const TEMPLATE_VALUE_REGEX = /{[\w\-?+*]*}/g;

export const RESOURCE_GROUP_REGEX = /^--[\w\- ]*$/g;
export const RESOURCE_KEY_REGEX = /^- [\w\- ]*:/g;

class StateManager {
    static getData(name) {
        const context = SillyTavern.getContext();
        var result = _.get(context, `extensionSettings.charHelper.${name}`, null);

        if (!result)
            result = DEFAULT[name];

        return result;
    }

    static setData(name, data) {
        const context = SillyTavern.getContext();
        _.set(context, `extensionSettings.charHelper.${name}`, data);
        context.saveSettingsDebounced();
    }

    static getSteps() {
        let resource = this.getData('template');
        let steps = [];

        Helper.smartSplit(resource, '\n').forEach(function (line) {
            if (line && line.match(TEMPLATE_KEY_REGEX)) {
                let split = Helper.smartSplit(line, ':');
                
                if (split[1] && split[1].match(TEMPLATE_VALUE_REGEX)) {
                    steps.push({ title: split[0], description: split[1] });
                }
            }
        });

        return steps;
    }

    static getResources() {
        let resource = this.getData('resource');

        let part = null;
        let key = null;
        let header = 0;
        let property = 0;

        let resources = {};

        Helper.smartSplit(resource, '\n').forEach(function (line) {
            if (line) {
                if (line.match(RESOURCE_GROUP_REGEX)) {
                    part = Helper.keyCase(line.substring(2));
                    key = null;
                    header = 0;
                    property = 0;
                }
                else if (part && line.match(TEMPLATE_KEY_REGEX)) {
                    let split = Helper.smartSplit(line, ':');

                    if (key && header > 0) {
                        resources[key].push({ title: Helper.titleCase(split[0]), description: split[1], type: 'subTitle' });
                        property = 0;
                    } else {
                        let title = Helper.titleCase(split[0]);
                        let valueKey = Helper.keyCase(split[0]);

                        if (part === valueKey)
                            key = valueKey;
                        else {
                            title = Helper.titleCase(part) + ': ' + title;
                            key = part + '-' + valueKey;
                        }

                        if (!resources.hasOwnProperty(key))
                            resources[key] = [];

                        resources[key].push({ title: title, description: split[1], type: 'title' });
                        property = 0;
                    }

                    header++;
                } else if (key && line.match(RESOURCE_KEY_REGEX)) {
                    if (property === 0) {
                        header--;
                    }

                    let split = Helper.smartSplit(line, ':');
                    let value = split[0].substring(2);

                    if (split.length === 2) {
                        resources[key].push({ title: Helper.titleCase(value), value: Helper.keyCase(value), description: split[1], type: 'option' });
                    } else if (split.length === 3) {
                        resources[key].push({ title: Helper.titleCase(value), value: Helper.keyCase(value), template: split[1], description: split[2], type: 'option' });
                    }

                    property++;
                }
            } else {
                key = null;
                header = 0;
                property = 0;
            } 
        });

        return resources;
    }
}

export default StateManager;
