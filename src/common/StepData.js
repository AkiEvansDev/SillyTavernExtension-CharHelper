import Helper from './Helper'
import { TEMPLATE_VALUE_REGEX } from './StateManager'

class StepData {
    constructor(stepIndex, step, resources) {
        this.save = [];
        this.groups = [];

        this.stepIndex = stepIndex;
        this.step = step;
        this.resources = resources;
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
        let copy = this.getData(data['copyParam']['key'], data['copyParam']['addNone'], true);
        console.log(this.save);

        group['items'].push(copy);

        return copy;
    }

    removeCopy(group, data) {
        let key = 'charHelperData-' + this.stepIndex + '-' + data['copyParam']['key'] + '-copy';

        let copies = group['items'].filter(d => d['id'].startsWith(key));

        if (copies.length > 0) {
            let last = copies[copies.length - 1];

            const index = group['items'].indexOf(last);
            group['items'].splice(index, 1);

            let keys = Object.keys(this.save).filter(k => k.includes(last['key']));

            for (let i = 0; i < keys.length; ++i) {
                delete this.save[keys[i]];
            }

            console.log(this.save);

            return last;
        }

        return null;
    }

    setGroups() {
        Helper.smartSplit(this.step['description'], ',').forEach((part, index) => {
            this.groups.push(this.getGroup(part, index));
        });
    }
    
    getGroup(part, id, copy = false) {
        let group = { id: "charHelperGroup-" + this.stepIndex + '-' + id, title: part, items: [] };

        [...part.match(TEMPLATE_VALUE_REGEX)].forEach((key) => {
            key = key.substring(1, key.length - 1);

            if (key.includes('?')) {
                let keys = Helper.smartSplit(key, '?').filter(k => k);

                if (keys.length === 1) {
                    group['items'].push(this.getData(keys[0], true, copy));
                } else if (keys.length === 2) {
                    let data1 = this.getData(keys[0], true, copy);
                    let data2 = this.getData(keys[1], true, copy);

                    data1['show'] = data2['id'];
                    data2['show'] = data1['id'];

                    group['items'].push(data1);
                    group['items'].push(data2);
                }
            } else {
                group['items'].push(this.getData(key, false, copy));
            }
        });

        return group;
    }

    getData(key, addNone, copy = false) {
        let copyParam = null;

        if (key.endsWith('*')) {
            key = key.substring(0, key.length - 1);
            copyParam = { key: key, addNone: addNone };
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

        key = this.getSaveKey(key);

        let data = { id: 'charHelperData-' + this.stepIndex + '-' + key, title: title, key: key, description: {}, options: [], subGroups: [], show: '', copyParam: copyParam, type: type };
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

                    if (res['type'] !== 'subTitle' && !this.save[data['key']]) {
                        this.save[data['key']] = res['value'];
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
}

export default StepData;
