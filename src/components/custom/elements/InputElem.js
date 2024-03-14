
function InputElem({ id, type, component, updateComponentText, onClick }) {
	const { position_x, position_y, width, height } = component;
	const { texte, police } = component.values;

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
				fontFamily: police
			}}
			value={type === 'text' ? texte : undefined}
            onChange={type === 'text' ? handleChange : undefined}
			onClick={() => onClick(id, component)}
		/>
	)
}

export default InputElem;