function Number({ data, onChange }) {
    return (
        <input id={data['id'] + '-input'} class="charHelperDataNumber text_pole textarea_compact" type="number" min="0" max="1000" onChange={e => onChange(data, e.target.value)} />
    );
}

export default Number;
