import { useState } from "react";

function InputElem({ id, component, updateComponentText, onClick }) {
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
		<>
				<input id={id} type="text"
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
					value={texte}
					onChange={handleChange}
					onClick={() => onClick(id, component)}
				/>

		</>
	)
}

export default InputElem;