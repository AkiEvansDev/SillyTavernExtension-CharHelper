import Select from './Select';
import Number from './Number';
import Text from './Text';
import Group from './Group';

function Data({ stepData, data, onChange }) {
    return (
        <div id={data['id']} class="charHelperGroupData">
            <label for={data['id'] + "-input"}>{data['title']}</label>
            <p class="charHelperDataDescription"><small id={data['id'] + "-text"}>{data['description'][stepData.save[data['key']]]}</small></p>
            {data['type'] === 'select' &&
                <Select data={data} onChange={onChange} />
            }
            {data['type'] === 'number' &&
                <Number data={data} onChange={onChange} />
            }
            {data['type'] === 'text' &&
                <Text data={data} onChange={onChange} />
            }
            {data['subGroups'].map((subGroup) => (
                <div class="charHelperSubGroup">
                    <Group stepData={stepData} group={subGroup} onChange={onChange} />
                </div>
            ))}
        </div>
    );
}

export default Data;
