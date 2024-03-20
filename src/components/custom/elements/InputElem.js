import { useState } from "react";

function InputElem({ id, type, component, updateComponentText, onClick }) {
	const [imageSrc, setImageSrc] = useState(null);
	const { position_x, position_y, width, height } = component;
	const { texte, police, textSize, alignment, weight, style, decoration, color, border, borderColor, borderRadius } = component.values;

	const handleChange = (event) => {
		const { value } = event.target;
		updateComponentText(id, value);
	}

	let textStyle = style ? 'italic' : '';
	let textWeight = weight ? 'bold' : '';
	let textDecoration = decoration ? 'underline' : '';

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		const reader = new FileReader();
		reader.onload = (e) => {
			setImageSrc(reader.result);
		};
		reader.readAsDataURL(file);
		console.log(file);
	}

	return (
		<>
			{type === 'text' && (
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
			)}
			{type === 'file' && (
				<>
					{!imageSrc && <input type={type} accept="image/*"
						style={{
							position: 'absolute',
							top: `${position_y}%`,
							left: `${position_x}%`
						}}
						onChange={handleFileChange}
					/>}
					{imageSrc &&
						<img id={id} src={imageSrc}
							alt='Uploaded image'
							style={{
								position: 'absolute',
								top: `${position_y}%`,
								left: `${position_x}%`,
								width: 'auto',
								height: `${height}%`,
								border: `${border}px solid ${borderColor}`,
								borderRadius: `${borderRadius}px`
							}}
							onClick={() => onClick(id, component)}	></img>
					}
				</>
			)}
		</>
	)
}

export default InputElem;