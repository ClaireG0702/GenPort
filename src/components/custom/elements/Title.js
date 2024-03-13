import { useState } from "react";

function Title({ id, component, alignment, style, weight, decoration, police, textSize, color, onChange, onClick }) {
    const { position_x, position_y, width, height } = component;
    const [text, setText] = useState(component.values.texte);
    let textStyle, textWeight, textDecoration;

    const handleTextChange = (event) => {
        setText(event.target.textContent);
        const updatedComponent = { ...component, values: {...component.values, texte: text} };
        onChange(id, updatedComponent);
    };

    style ? textStyle = 'italic' : textStyle = '';
    weight ? textWeight = 'bold' : textWeight = '';
    decoration ? textDecoration = 'underline' : textDecoration = '';

    return (
        <h1 id={id}
            style={{
                position: 'absolute',
                top: `${position_y}%`,
                left: `${position_x}%`,
                width: `${width}%`,
                height: `${height}%`,
                padding: '2px',
                color: color,
                fontSize: `${textSize}px`,
                fontFamily: police,
                textAlign: alignment,
                fontStyle: textStyle,
                fontWeight: textWeight,
                textDecoration: textDecoration,
                cursor: 'text'
            }}>{text}</h1>
    );
}

export default Title;