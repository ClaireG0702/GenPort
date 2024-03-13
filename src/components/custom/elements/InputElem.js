import { useState } from "react";

function InputElem({ id, type, component }) {
	const { position_x, position_y, width, height } = component;
	const { texte } = component.values;
	const [text, setText] = useState(texte)

	const handleChange = (event) => {
		const { value } = event.target;
		setText(value);
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
			value={type === 'text' ? text : undefined}
            onChange={type === 'text' ? handleChange : undefined}
		/>
	)
}

export default InputElem;