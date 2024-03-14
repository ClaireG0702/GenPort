
function InputElem({ id, type, component, updateComponentText }) {
	const { position_x, position_y, width, height } = component;
	const { texte } = component.values;
	

	const handleChange = (event) => {
		const { value } = event.target;
		updateComponentText(id, value);
	}

	return (
		<input id={id} type={type}
			style={{
				position: 'absolute',
				top: `${position_y}%`,
				left: `${position_x}%`,
				width: `${width}%`,
				height: `${height}%`,
			}}
			value={type === 'text' ? texte : undefined}
            onChange={type === 'text' ? handleChange : undefined}
		/>
	)
}

export default InputElem;