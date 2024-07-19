import React, { useEffect } from 'react';
import StepData from './common/StepData'
import Group from './parts/Group';

function Step({ stepIndex, step, resources }) {
    const stepData = new StepData(stepIndex, step, resources);

    stepData.setGroups();

    useEffect(() => {
        stepData.groups.flatMap(g => g['items']).forEach(function (data) {
            onChange(data, stepData.save[data['key']]);
        });
        console.log(stepData.groups);
    }, []);

    function onChange(data, value) {
        let container = document.getElementById('charHelperStep-' + stepIndex + '-container');
        let text = container.querySelector('#' + data['id'] + '-text');

        text.textContent = data['description'][value];
        stepData.save[data['key']] = value;

        if (data['show'] && value === 'none') {
            let target = container.querySelector('#' + data['id']);
            let show = container.querySelector('#' + data['show']);

            let showInput = container.querySelector('#' + data['show'] + '-input');
            let showData = stepData.groups.flatMap(g => g['items']).find(d => d['id'] === data['show']);
            let showValue = showData['options'].find(o => !o['disabled'] && o['value'] !== 'none')['value'];

            showInput.value = showValue;
            onChange(showData, showValue);

            target.style = 'display: none;';
            show.style = '';
        }

        if (data['subGroups'] && data['subGroups'].length > 0 && value !== 'none') {
            data['subGroups'].forEach(group => {
                let groupTarget = container.querySelector('#' + group['id']);
                
                if (group['id'].replace('charHelperGroup', 'charHelperData') === data['id'] + '-' + value) {
                    groupTarget.style = '';
                } else {
                    groupTarget.style = 'display: none;';
                }
            });
        }

        console.log(stepData.save);
    }
    
    return (
        <div id={"charHelperStep-" + stepIndex + "-container"} >
            <h3>{step['title']}</h3>
            <hr></hr>
            {stepData.groups.map((group) => (
                <Group stepData={stepData} group={group} onChange={onChange} />
            ))}
        </div>
    );
}

export default Step;
