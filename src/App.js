import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import StateManager from './common/StateManager';
import Helper from './common/Helper';
import Step from './Step';

function App({ onCloseClicked }) {
    const [data, setData] = useState(StateManager.getStepsData());

    function refresh() {
        let container = document.getElementById('charHelperPanelSteps');
        ReactDOM.render((<></>), container, () => {
            setData(StateManager.getStepsData());
        });
    }

    function result() {
        let container = document.getElementById('charHelperPanelSteps');
        let resultContainer = document.getElementById('charHelperPanelResult');
        let input = resultContainer.querySelector('#charHelperPanelResult-input');

        container.style = 'display: none;';
        resultContainer.style = ''

        let text = Helper.buildResult(data);

        input.rows = text.split('\n').length + 2;
        input.value = text;
    }

    function resultBack() {
        let container = document.getElementById('charHelperPanelSteps');
        let resultContainer = document.getElementById('charHelperPanelResult');

        container.style = '';
        resultContainer.style = 'display: none;'
    }

    function next(index) {
        render(index + 1, index);
    }

    function prev(index) {
        render(index - 1, index);
    }

    function renderAll(complite) {
        let container = document.getElementById('charHelperPanelSteps');
        let resultContainer = document.getElementById('charHelperPanelResult');

        resultContainer.style = 'display: none;'

        ReactDOM.render((<>{
            data['steps'].map((step, index) => (
                <Step stepData={step} next={(index < data['steps'].length - 1 ? next : null)} prev={(index !== 0 ? prev : null)} result={(index === data['steps'].length - 1 ? result : null)} />
            ))
        }</>), container, complite);
    }

    function render(index, hide = null) {
        let container = document.getElementById('charHelperPanelSteps');
        let element = container.querySelector('#charHelperStep-' + index);

        if (!element) {
            setTimeout(function () {
                render(index, hide);
            }, 1000);
            return;
        }

        element.style = '';

        if (hide !== null) {
            let hideElement = container.querySelector('#charHelperStep-' + hide);
            hideElement.style = 'display: none;';
        } else {
            for (let i = 0; i < data['steps'].length; ++i) {
                if (i !== index) {
                    let hideElement = container.querySelector('#charHelperStep-' + i);
                    hideElement.style = 'display: none;';
                }
            }
        }
    }

    useEffect(() => {
        if (data['render'] === false) {
            data['render'] = true;
            renderAll(() => {
                render(0);
            });
        }
    }, [data]);

    return (
        <>
            <div class="panelControlBar flex-container alignItemsBaseline">
                <div class="fa-fw fa-solid fa-refresh floating_panel_close" onClick={() => refresh()}></div>
                <div class="fa-fw fa-solid fa-circle-xmark floating_panel_close" onClick={() => onCloseClicked()}></div>
            </div>
            <div class="m-t-1 scrollY" style={{width: '100%'}}>
                <div id="charHelperPanelSteps">
                </div>
                <div id="charHelperPanelResult">
                    <div class="flex-container">
                        <div class="menu_button interactable fa-solid fa-arrow-left" onClick={() => resultBack()}></div>
                    </div>
                    <div>
                        <h3>Result:</h3>
                        <hr></hr>
                        <textarea id="charHelperPanelResult-input" class="text_pole textarea_compact" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
