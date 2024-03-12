import { useState } from "react";

function Title({ id, component, position_y, position_x, width, height, alignment, style, weight, decoration, police, textSize, color, textValue, onChange, onClick }) {
    const [text, setText] = useState(textValue);
    let textStyle, textWeight, textDecoration;

    const handleTextChange = (event) => {
        setText(event.target.textContent);
        const updatedComponent = { ...component, values: {...component.values, texte: text} };
        onChange(id, updatedComponent);
    };

    style ? textStyle = 'italic' : textStyle = '';
    weight ? textWeight = 'bold' : textWeight = '';
    decoration ? textDecoration = 'underline' : textDecoration = '';

    if(component) {
        position_x = component.position_x;
        position_y = component.position_y;
        width = component.width;
        height = component.height;
    }

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
            }}
            onClick={onClick}
            contentEditable onBlur={handleTextChange}
            dangerouslySetInnerHTML={{ __html: text }}></h1>
    );
}

export default Title;