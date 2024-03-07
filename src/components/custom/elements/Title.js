import { useState } from "react";

function Title({ id, component, position_y, position_x, width, height, alignment, style, weight, decoration, police, textSize, color, textValue, onClick }) {
    const [text, setText] = useState(textValue);
    let textStyle, textWeight, textDecoration;

    const handleTextChange = (event) => {
        setText(event.target.textContent);
    }

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
                width: `${width}px`,
                height: `${height}px`,
                position: 'absolute',
                top: `${position_y}px`,
                left: `${position_x}px`,
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