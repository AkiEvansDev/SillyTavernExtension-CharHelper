import React, { useState } from 'react';
import { Tabs, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import StateManager from './common/StateManager';
import Step from './Step';

function App({ onCloseClicked }) {
    const [steps, setSteps] = useState(StateManager.getSteps());
    const [resources, setResources] = useState(StateManager.getResources());
    const [selectedIndex, setSelectedIndex] = useState(0);

    console.log(steps);
    console.log(resources);

    return (
        <>
            <div class="panelControlBar flex-container alignItemsBaseline">
                <div class="fa-fw fa-solid fa-grip drag-grabber"></div>
                <div class="fa-fw fa-solid fa-circle-xmark floating_panel_close" onClick={() => onCloseClicked()}></div>
            </div>
            <div id="charHelperPanelHolder" class="scrollY">
                <Tabs selectedIndex={selectedIndex} onSelect={(index) => setSelectedIndex(index)}>
                    {steps.map((step, index) => (
                        <TabPanel key={index}>
                            <Step stepIndex={index} step={step} resources={resources} />
                        </TabPanel>
                    ))}
                </Tabs>
            </div>
        </>
    );
}

export default App;
