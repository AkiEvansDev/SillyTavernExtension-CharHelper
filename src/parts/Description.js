function Description({ id, stepData, text }) {
    let wait = false;

    async function translate() {
        if (wait)
            return;

        let value = stepData.save[id];

        if (!stepData.translates[value]) {
            wait = true;
            stepData.translates[value] = await stepData.translate(value);
            wait = false;
        }

        let container = document.getElementById('charHelperStep-' + stepData.stepIndex + '-container');
        let text = container.querySelector('#' + id + '-text');
        let textTranslate = container.querySelector('#' + id + '-text-translate');

        if (!text.style.display) {
            text.style = 'display: none;';
            textTranslate.style = '';
        } else {
            text.style = '';
            textTranslate.style = 'display: none;';
        }

        textTranslate.textContent = stepData.translates[value];
    }

    return (
        <div class="charHelperDataDescription">
            <small id={id + '-text'}>{text}</small>
            <small id={id + '-text-translate'}></small>
            <div id={id + '-text-translate-btn'} class="menu_button interactable fa-solid fa-language" style={(text && text.length > 0 ? {} : { display: 'none' })} onClick={() => translate()}></div>
        </div>
    );
}

export default Description;
