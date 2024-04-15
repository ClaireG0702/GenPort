import { useState } from "react";

function InputElem({ id, component, elem, updateComponentText, onClick }) {
	const { position_x, position_y, z_index } = component;
	const { texte, police, textSize, weight, style, decoration, color } = component.values;

	const handleChange = (event) => {
		const { value } = event.target;
		updateComponentText(id, value);
	}

	let textStyle = style ? 'italic' : '';
	let textWeight = weight ? 'bold' : '';
	let textDecoration = decoration ? 'underline' : '';

	const componentStyle = elem === 'text' ? {
		width: `${component.width}%`,
		height: `${component.height}%`,
		textAlign: component.values.alignment,
	} : {
		padding: '2px',
		textAlign: 'center',
		border: `${component.values.border}px solid ${component.values.borderColor}`,
		borderRadius: `${component.values.borderRadius}px`,
		backgroundColor: component.values.backgroundColor
	};

	return (
		<>
			<input id={id} type="text"
				style={{
					position: 'absolute',
					top: `${position_y}%`,
					left: `${position_x}%`,
					zIndex: z_index,
					fontFamily: police,
					fontSize: `${textSize}px`,
					color: color,
					fontWeight: textWeight,
					fontStyle: textStyle,
					textDecoration: textDecoration,
					...componentStyle,
				}}
				value={texte}
				onChange={handleChange}
				onClick={() => onClick(id, component)}
			/>
		</>
	)
}

export default InputElem;