function Text({ data, onChange }) {
    return (
        <textarea id={data['id'] + '-input'} class="charHelperDataText text_pole textarea_compact" rows="2" onChange={e => onChange(data, e.target.value)} />
    );
}

export default Text;
