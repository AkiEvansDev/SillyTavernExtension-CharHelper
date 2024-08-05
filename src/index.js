import React from 'react';
import ReactDOM from 'react-dom/client';
import StateManager from './common/StateManager';
import App from './App';
import Settings from './Settings';
import './styles.css';

const rootContainer = document.getElementById('extensions_settings');
const rootElement = document.createElement('div');
rootContainer.appendChild(rootElement);

const root = ReactDOM.createRoot(rootElement);
root.render(
    <Settings />
);

const buttonContainer = document.getElementById('extensionsMenu');
const buttonElement = document.createElement('div');
const iconElement = document.createElement('i');
const textElement = document.createElement('span');

buttonElement.id = 'openCharHelperButton';
buttonElement.classList.add('list-group-item', 'flex-container', 'flexGap5', 'interactable');
buttonContainer.classList.add('interactable');
iconElement.classList.add('fa-solid', 'fa-vcard');
textElement.textContent = 'Open Char Helper';

buttonContainer.appendChild(buttonElement);
buttonElement.appendChild(iconElement);
buttonElement.appendChild(textElement);

const rootElementWindow = document.getElementById('top-settings-holder');
const rootContainerWindow = document.createElement('div');
rootElementWindow.appendChild(rootContainerWindow);
rootContainerWindow.id = 'charHelperPanel';
rootContainerWindow.classList.add('drawer-content', 'flexGap5', 'displayNone');

buttonElement.addEventListener('click', () => {
    rootContainerWindow.classList.toggle('flex');
    rootContainerWindow.classList.toggle('displayNone');
});

function closePanel() {
    rootContainerWindow.classList.remove('flex');
    rootContainerWindow.classList.add('displayNone');
}

const rootWindow = ReactDOM.createRoot(rootContainerWindow);
rootWindow.render(
    <App onCloseClicked={closePanel} />
);

function insertChar(char) {
    let textarea = document.getElementById('send_textarea');

    var start = textarea.selectionStart;
    var end = textarea.selectionEnd;
    var text = textarea.value;

    console.log(start);
    console.log(end);

    if (start !== end && (char === '"' || char === '*')) {
        textarea.value = text.substring(0, start) + char + text.substring(start, end) + char + text.substring(end);
        end += char.length;
    } else if (start !== end && (char === '[' || char === ']')) {
        textarea.value = text.substring(0, start) + '[' + text.substring(start, end) + ']' + text.substring(end);
        end += char.length;
    } else {
        textarea.value = text.substring(0, start) + char + text.substring(start);
    }

    textarea.selectionStart = textarea.selectionEnd = end + char.length;
    textarea.focus();
}

const inputContainer = document.getElementById('send_form');
const inputButtonContainer = document.createElement('div');

inputButtonContainer.id = 'send_form_help_btn_container';
inputButtonContainer.classList.add('flex-container');

if (StateManager.getData('showHelpBtn') === false)
    inputButtonContainer.style = 'display: none;';

inputContainer.insertBefore(inputButtonContainer, inputContainer.firstChild);

const chars = ['{{char}}', '{{user}}', '[', ']', '"', '*'];

for (let i = 0; i < chars.length; ++i) {
    let iconButtonElement = document.createElement('i');

    iconButtonElement.classList.add('menu_button', 'interactable');
    iconButtonElement.textContent = chars[i];

    inputButtonContainer.appendChild(iconButtonElement);

    iconButtonElement.addEventListener('click', function () {
        insertChar(chars[i]);
        iconButtonElement.blur();
    });
}
