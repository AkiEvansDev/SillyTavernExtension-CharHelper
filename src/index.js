import React from 'react';
import ReactDOM from 'react-dom/client';
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
textElement.textContent = 'Open Char Helper';
iconElement.classList.add('fa-solid', 'fa-vcard');
buttonElement.id = 'openCharHelperButton';
buttonElement.classList.add('list-group-item', 'flex-container', 'flexGap5', 'interactable');
buttonElement.tabIndex = 0;
buttonContainer.classList.add('interactable');
buttonContainer.tabIndex = 0;
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
