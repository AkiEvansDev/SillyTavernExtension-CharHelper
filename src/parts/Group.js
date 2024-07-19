import * as ReactDOM from 'react-dom';
import Data from './Data';

function Group({ stepData, group, onChange }) {

    function addCopy(data) {
        let container = document.getElementById('charHelperStep-' + stepData.stepIndex + '-container');
        let copyContainer = container.querySelector('#' + data['id'] + '-copy-container');

        let copy = stepData.createCopy(group, data);

        const div = document.createElement("div");
        div.id = copy.id + '-part';
        copyContainer.appendChild(div);

        ReactDOM.render((<Data stepData={stepData} data={copy} onChange={onChange} />), div);

        div.appendChild(document.createElement("hr"))

        onChange(copy, stepData.save[copy['key']]);
    }

    function removeCopy(data) {
        let remove = stepData.removeCopy(group, data);

        if (remove) {
            let container = document.getElementById('charHelperStep-' + stepData.stepIndex + '-container');
            let copyContainer = container.querySelector('#' + data['id'] + '-copy-container');
            let removeContainer = copyContainer.querySelector('#' + remove['id'] + '-part');

            copyContainer.removeChild(removeContainer);
        }
    }

    return (
        <div id={group['id']}>
            <h5><code>{group['title']}</code></h5>
            {group['items'].map((data) => (
                <>
                    <Data stepData={stepData} data={data} onChange={onChange} />
                    {data['copyParam'] &&
                        <>
                            <div id={data['id'] + '-copy-container'}>
                            </div>
                            <div class="flex-container">
                                <div class="menu_button fa-plus fa-solid interactable" onClick={() => addCopy(data)}></div>
                                <div class="menu_button fa-minus fa-solid interactable" onClick={() => removeCopy(data)}></div>
                            </div>
                        </>
                    }
                </>
            ))}
            <hr></hr>
        </div>
    );
}

export default Group;
