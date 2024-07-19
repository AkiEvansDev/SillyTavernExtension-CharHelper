import React, { useState } from 'react';
import StateManager from './common/StateManager';

function Settings() {
    const [template, setTemplate] = useState(StateManager.getData('template'));
    const [resource, setResource] = useState(StateManager.getData('resource'));
    
    const handleChangeTemplate = (event) => {
        setTemplate(event.target.value);
        StateManager.setData('template', event.target.value);
    };

    const handleChangeResource = (event) => {
        setResource(event.target.value);
        StateManager.setData('resource', event.target.value);
    };

    return (
        <div class="char_helper_settings">
            <div class="inline-drawer">
                <div class="inline-drawer-toggle inline-drawer-header">
                    <b data-i18n="ext_char_helper_title">Char Helper</b>
                    <div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>
                </div>
                <div class="inline-drawer-content">
                    <label for="char_helper_template" class="checkbox_label" data-i18n="ext_char_helper_template">Template</label>
                    <textarea id="char_helper_template" type="text" class="text_pole textarea_compact" rows="5" placeholder="" value={template} onChange={handleChangeTemplate}></textarea>
                    <label for="char_helper_resource" class="checkbox_label" data-i18n="ext_char_helper_resource">Resource</label>
                    <textarea id="char_helper_resource" type="text" class="text_pole textarea_compact" rows="10" placeholder="" value={resource} onChange={handleChangeResource}></textarea>
                </div>
            </div>
        </div>
    );
}

export default Settings;
