import { useState } from "react";

function TextZone({ id, component, position_y, position_x, width, height, alignment, style, weight, decoration, police, textSize, color, textValue, onChange, onClick }) {
    const [text, setText] = useState(textValue);

    const handleTextChange = (event) => {
        setText(event.target.textContent);
        const updatedComponent = { ...component, values: {...component.values, texte: event.target.textContent} };
        onChange(id, updatedComponent);
    }; 

    let textStyle = style ? 'italic' : '';
    let textWeight = weight ? 'bold' : '';
    let textDecoration = decoration ? 'underline' : '';

    if(component) {
        position_x = component.position_x;
        position_y = component.position_y;
        width = component.width;
        height = component.height;
    }

    return (
        <span id={id}
            style={{
                position: 'absolute',
                top: `${position_y}%`,
                left: `${position_x}%`,
                width: `${width}px`,
                height: `${height}px`,
                padding: '2px',
                color: color,
                fontSize: `${textSize}px`,
                fontFamily: police,
                textAlign: alignment,
                fontStyle: textStyle,
                fontWeight: textWeight,
                textDecoration: textDecoration,
                cursor: 'text'
            }}
            onClick={onClick}
            contentEditable onBlur={handleTextChange}
            dangerouslySetInnerHTML={{ __html: text }}></span>
    );
}

export default TextZone;