import React, { useState } from 'react';
import { DEFAULT_TEMPLATE, DEFAULT_RESOURCE } from './common/data'
import StateManager from './common/StateManager';

function Settings() {
    const [template, setTemplate] = useState(StateManager.getData('template'));
    const [resource, setResource] = useState(StateManager.getData('resource'));
    const [translate, setTranslate] = useState(StateManager.getData('translate'));

    const handleChangeTemplate = (event) => {
        setTemplate(event.target.value);
        StateManager.setData('template', event.target.value);
    };

    const handleChangeResource = (event) => {
        setResource(event.target.value);
        StateManager.setData('resource', event.target.value);
    };

    const handleChangeTranslate = (event) => {
        setTranslate(event.target.value);
        StateManager.setData('translate', event.target.value);
    };

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
                        <div class="right_menu_button interactable" id="char_helper_settings_template_restore">
                            <i class="fa-solid fa-clock-rotate-left fa-sm"></i>
                        </div>
                    </label>
                    <textarea id="char_helper_char_helper_settings_template_template" type="text" class="text_pole textarea_compact" rows="5" placeholder="" value={template} onChange={handleChangeTemplate}></textarea>
                    <label for="char_helper_settings_resource" class="checkbox_label">Resource</label>
                    <textarea id="char_helper_settings_resource" type="text" class="text_pole textarea_compact" rows="10" placeholder="" value={resource} onChange={handleChangeResource}></textarea>
                    <label class="checkbox_label" for="char_helper_translate">
                        <input type="checkbox" id="char_helper_settings_translate" checked={translate} onChange={handleChangeTranslate} />
                        <span>Translate description</span>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Settings;
