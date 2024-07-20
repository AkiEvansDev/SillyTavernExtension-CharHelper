import React, { useEffect } from 'react';
import Group from './parts/Group';

function Step({ stepData, next, prev, result }) {
    useEffect(() => {
        if (stepData.render === true) {
            stepData.groups.flatMap(g => g['items']).forEach(function (data) {
                onChange(data, stepData.save[data['id']]);
            });
            stepData.render = false;
        }
    }, []);

    function onChange(data, value) {
        let container = document.getElementById('charHelperStep-' + stepData.stepIndex + '-container');
        let text = container.querySelector('#' + data['id'] + '-text');

        text.textContent = data['description'][value];
        stepData.save[data['id']] = value;

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

        if (data['subGroups'] && data['subGroups'].length > 0) {
            data['subGroups'].forEach(group => {
                let groupTarget = container.querySelector('#' + group['id']);

                if (group['id'] === data['id'] + '-' + value) {
                    groupTarget.style = '';
                } else {
                    groupTarget.style = 'display: none;';
                }
            });
        }
    }
    
    return (
        <div id={'charHelperStep-' + stepData.stepIndex}>
            <div class="flex-container">
                {prev &&
                    <div class="menu_button interactable fa-solid fa-arrow-left" onClick={() => prev(stepData.stepIndex)}></div>
                }
                {next &&
                    <div class="menu_button interactable fa-solid fa-arrow-right" onClick={() => next(stepData.stepIndex)}></div>
                }
                {result &&
                    <div class="menu_button interactable fa-solid fa-check" onClick={() => result()}></div>
                }
            </div>
            <div id={'charHelperStep-' + stepData.stepIndex + '-container'} >
                <h3>{stepData.step['title']}</h3>
                <hr></hr>
                {stepData.groups.map((group) => (
                    <>
                        <Group stepData={stepData} group={group} onChange={onChange} />
                        <hr></hr>
                    </>
                ))}
            </div>
            <div class="flex-container">
                {next &&
                    <div class="menu_button interactable" onClick={() => next(stepData.stepIndex)}>Next</div>
                }
                {result &&
                    <div class="menu_button interactable" onClick={() => result()}>Result</div>
                }
                {prev &&
                    <div class="menu_button interactable" onClick={() => prev(stepData.stepIndex)}>Prev</div>
                }
            </div>
        </div>
    );
}

export default Step;
