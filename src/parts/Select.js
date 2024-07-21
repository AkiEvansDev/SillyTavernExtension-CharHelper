function Select({ data, onChange }) {
    return (
        <select id={data['id'] + '-input'} class="charHelperDataSelect flex1 margin1" onChange={(e) => onChange(data, e.target.value)}>
            {data['options'].map((option) => (
                <option value={option['value']} disabled={option['disabled']} style={(option['color'] ? { color: option['color'] } : {})}>{option['label']}</option>
            ))}
        </select>
    );
}

export default Select;
