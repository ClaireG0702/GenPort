import { useState } from "react";

function Title({ id, top, left, alignment, style, weight, decoration, police, textSize, color, textValue, onClick }) {
    const [text, setText] = useState(textValue);
    let textStyle, textWeight, textDecoration;

    const handleTextChange = (event) => {
        setText(event.target.textContent);
    }

    style ? textStyle = 'italic' : textStyle = '';
    weight ? textWeight = 'bold' : textWeight = '';
    decoration ? textDecoration = 'underline' : textDecoration = '';

    return (
        <h1 id={id}
            style={{
                width: 'fit-content',
                position: 'absolute',
                top: `${top}px`,
                left: `${left}px`,
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