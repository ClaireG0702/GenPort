
function InputElem({ id, type, component, updateComponentText, onClick }) {
	const { position_x, position_y, width, height } = component;
	const { texte, police, textSize, alignment, weight, style, decoration, color } = component.values;

	const handleChange = (event) => {
		const { value } = event.target;
		updateComponentText(id, value);
	}

	let textStyle = style ? 'italic' : '';
    let textWeight = weight ? 'bold' : '';
    let textDecoration = decoration ? 'underline' : '';

	return (
		<input id={id} type={type}
			style={{
				position: 'absolute',
				top: `${position_y}%`,
				left: `${position_x}%`,
				width: `${width}%`,
				height: `${height}%`,
				fontFamily: police,
				fontSize: `${textSize}px`,
				color: color,
				textAlign: alignment,
				fontWeight: textWeight,
				fontStyle: textStyle,
				textDecoration: textDecoration
			}}
			value={type === 'text' ? texte : undefined}
            onChange={type === 'text' ? handleChange : undefined}
			onClick={() => onClick(id, component)}
		/>
	)
}

export default InputElem;