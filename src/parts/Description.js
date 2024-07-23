function Description({ id, description, stepData, text }) {
    let wait = false;

    async function translate() {
        if (wait)
            return;

        let descriptionKey = description + '-' + stepData.save[id];

        if (!stepData.translates[descriptionKey]) {
            wait = true;
            stepData.translates[descriptionKey] = await stepData.translate(descriptionKey);
            wait = false;
        }

        let container = document.getElementById('charHelperStep-' + stepData.stepIndex + '-container');
        let text = container.querySelector('#' + id + '-description-text');
        let textTranslate = container.querySelector('#' + id + '-description-text-translate');

        if (!text.style.display) {
            text.style = 'display: none;';
            textTranslate.style = '';
        } else {
            text.style = '';
            textTranslate.style = 'display: none;';
        }

        textTranslate.textContent = stepData.translates[descriptionKey];
    }

    return (
        <div class="charHelperDataDescription">
            <small id={id + '-description-text'}>{stepData.descriptions[description + '-' + stepData.save[id]]}</small>
            <small id={id + '-description-text-translate'}></small>
            <div id={id + '-description-text-translate-btn'} class="menu_button interactable fa-solid fa-language" style={(text && text.length > 0 ? {} : { display: 'none' })} onClick={() => translate()}></div>
        </div>
    );
}

export default Description;
