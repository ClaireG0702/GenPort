import { useState } from "react";

function TextZone({ id, component, alignment, style, weight, decoration, police, textSize, color, onChange, onClick }) {
    const { position_x, position_y, width, height } = component;
    const [text, setText] = useState(component.values.texte);
    
    const handleTextChange = (event) => {
        setText(event.target.textContent);
        const updatedComponent = { ...component, values: { ...component.values, texte: event.target.textContent } };
        onChange(id, updatedComponent);
    };

    let textStyle = style ? 'italic' : '';
    let textWeight = weight ? 'bold' : '';
    let textDecoration = decoration ? 'underline' : '';

    return (
        <span id={id}
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
            }}>{text}</span>
    );
}

export default TextZone;