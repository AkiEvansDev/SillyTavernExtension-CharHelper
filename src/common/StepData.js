import Helper from './Helper'
import { TEMPLATE_VALUE_REGEX } from './StateManager'

class StepData {
    constructor(stepIndex, step, resources) {
        this.save = [];
        this.groups = [];

        this.stepIndex = stepIndex;
        this.step = step;
        this.resources = resources;

        this.render = true;
    }

    getSaveKey(key) {
        if (this.save.hasOwnProperty(key)) {
            let index = 0;
            let newKey = `${key}-${index}`;

            while (this.save.hasOwnProperty(newKey)) {
                index++;
                newKey = `${key}-${index}`;
            }

            return newKey;
        }

        return key;
    }

    createCopy(group, data) {
        let copy = this.getData(group, data['copyParam']['id'], data['copyParam']['addNone'], true);

        group['items'].push(copy);

        return copy;
    }

    removeCopy(group, data) {
        let key = data['id'] + '-copy';

        let copies = group['items'].filter(d => d['id'].startsWith(key));

        if (copies.length > 0) {
            let last = copies[copies.length - 1];

            const index = group['items'].indexOf(last);
            group['items'].splice(index, 1);

            let keys = Object.keys(this.save).filter(k => k.includes(last['id']));

            for (let i = 0; i < keys.length; ++i) {
                delete this.save[keys[i]];
            }

            return last;
        }

        return null;
    }

    setGroups() {
        Helper.smartSplit(this.step['description'], ',').forEach((part, index) => {
            this.groups.push(this.getGroup(part, 'ch-group-' + this.stepIndex + '-' + index));
        });
    }
    
    getGroup(part, id, copy = false) {
        let group = { id: id, title: part, items: [] };

        [...part.match(TEMPLATE_VALUE_REGEX)].forEach((key) => {
            key = key.substring(1, key.length - 1);

            if (key.includes('?')) {
                let keys = Helper.smartSplit(key, '?').filter(k => k);

                if (keys.length === 1) {
                    group['items'].push(this.getData(group, keys[0], true, copy));
                } else if (keys.length === 2) {
                    let data1 = this.getData(group, keys[0], true, copy);
                    let data2 = this.getData(group, keys[1], true, copy);

                    data1['show'] = data2['id'];
                    data2['show'] = data1['id'];

                    group['items'].push(data2);
                    group['items'].push(data1);
                }
            } else {
                group['items'].push(this.getData(group, key, false, copy));
            }
        });

        return group;
    }

    getData(group, key, addNone, copy = false) {
        let copyParam = null;
        let replace = key;

        if (key.endsWith('*')) {
            key = key.substring(0, key.length - 1);
            copyParam = { id: key, addNone: addNone };
        }
        
        let resource = this.resources[key];
        let type = 'select';
        let title = '';

        if (key.startsWith('number-')) {
            type = 'number';
            title = Helper.titleCase(key.substring(7));
        } else if (key.startsWith('text-')) {
            type = 'text';
            title = Helper.titleCase(key.substring(5));
        }

        if (copy === true) {
            key = key + '-copy';
        }

        key = this.getSaveKey(group['id'] + '-' + key);

        let data = { id: key, title: title, replace: replace, description: {}, options: [], subGroups: [], show: '', copyParam: copyParam, type: type };
        this.save[key] = addNone ? 'none' : '';

        if (resource) {
            if (addNone) {
                data['options'].push({ value: 'none', label: 'None', disabled: false });
            }

            resource.forEach((res) => {
                if (res['type'] === 'title') {
                    data['title'] = res['title'];
                } else {
                    data['description'][res['value']] = res['description'];

                    if (res['type'] !== 'subTitle' && !this.save[data['id']]) {
                        this.save[data['id']] = res['value'];
                    }

                    let option = { value: res['value'], label: res['title'], color: '', disabled: res['type'] === 'subTitle' };

                    if (res['template']) {
                        if (res['template'][0] === '#') {
                            option['color'] = res['template'];
                        } else {
                            data['subGroups'].push(this.getGroup(res['template'], key + '-' + [res['value']], copy));
                        }
                    }

                    data['options'].push(option);
                }
            });
        }

        return data;
    }

    getResult() {
        let result = this.step['description'];

        this.groups.forEach((group) => {
            result = result.replace(group['title'], this.getGroupResult(group));
        });

        return Helper.clearResult(result);
    }

    getGroupResult(group) {
        let result = group['title'];

        group['items'].forEach((item) => {
            if (item['replace'].endsWith('*')) {
                let copyId = item['id'] + '-copy';
                let copies = group['items'].filter(i => i['id'].startsWith(copyId));

                let template = item['replace'].substring(0, item['replace'].length - 1);
                let results = [item['replace']];

                copies.forEach(() => {
                    results.push(template);
                });

                result = result.replace(item['replace'], results.join('; '));
            }

            result = result.replace(item['replace'], this.getItemResult(item));
        });

        return result;
    }

    getItemResult(item) {
        let result = this.save[item['id']];

        if (result === 'none') {
            return '';
        }

        if (item['subGroups'].length > 0) {
            let subGroupId = item['id'] + '-' + result;
            let subGroup = item['subGroups'].filter(g => g['id'] === subGroupId);

            if (subGroup && subGroup.length === 1) {
                result = this.getGroupResult(subGroup[0]);
            }
        }
        
        return result;
    }
}

export default StepData;
