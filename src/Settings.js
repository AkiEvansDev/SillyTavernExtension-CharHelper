import React, { useState } from 'react';
import { DEFAULT_TEMPLATE, DEFAULT_RESOURCE } from './common/data'
import StateManager from './common/StateManager';

function Settings() {
    const [template, setTemplate] = useState(StateManager.getData('template'));
    const [resource, setResource] = useState(StateManager.getData('resource'));
    const [showHelpBtn, setShowHelpBtn] = useState(StateManager.getData('showHelpBtn'));

    const handleChangeTemplate = (event) => {
        setTemplate(event.target.value);
        StateManager.setData('template', event.target.value);
    };

    const handleChangeResource = (event) => {
        setResource(event.target.value);
        StateManager.setData('resource', event.target.value);
    };

    const handleChangeShowHelpBtn = (event) => {
        setShowHelpBtn(event.target.checked);
        StateManager.setData('showHelpBtn', event.target.checked);
        
        var element = document.getElementById('send_form_help_btn_container');

        if (event.target.checked === true) {
            element.style = '';
        } else {
            element.style = 'display: none;';
        }
    };

    const restoreTemplate = () => {
        setTemplate(DEFAULT_TEMPLATE);
        StateManager.setData('template', DEFAULT_TEMPLATE);
    }

    const restoreResource = () => {
        setResource(DEFAULT_RESOURCE);
        StateManager.setData('resource', DEFAULT_RESOURCE);
    }

    return (
        <div class="char_helper_settings">
            <div class="inline-drawer">
                <div class="inline-drawer-toggle inline-drawer-header">
                    <b>Char Helper</b>
                    <div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>
                </div>
                <div class="inline-drawer-content">
                    <label for="char_helper_settings_template" class="title_restorable">
                        <span>Template</span>
                        <div class="right_menu_button interactable" id="char_helper_settings_template_restore" onClick={restoreTemplate}>
                            <i class="fa-solid fa-clock-rotate-left fa-sm"></i>
                        </div>
                    </label>
                    <textarea id="char_helper_char_helper_settings_template_template" type="text" class="text_pole textarea_compact" rows="5" placeholder="" value={template} onChange={handleChangeTemplate}></textarea>
                    <label for="char_helper_settings_resource" class="title_restorable">
                        <span>Resource</span>
                        <div class="right_menu_button interactable" id="char_helper_settings_resource_restore" onClick={restoreResource}>
                            <i class="fa-solid fa-clock-rotate-left fa-sm"></i>
                        </div>
                    </label>
                    <textarea id="char_helper_settings_resource" type="text" class="text_pole textarea_compact" rows="10" placeholder="" value={resource} onChange={handleChangeResource}></textarea>
                    <label class="checkbox_label" for="char_helper_show_help_btn">
                        <input type="checkbox" id="char_helper_show_help_btn" checked={showHelpBtn} onChange={handleChangeShowHelpBtn} />
                        <span>Show help input buttons</span>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Settings;
