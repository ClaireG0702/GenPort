import { useState } from "react";

function TextZone({color, onClick}) {
    const [text, setText] = useState('Zone de texte');

    const handleTextChange = (event) => {
        setText(event.target.textContent);
    }

    return (
        <span style={{
            width: 'fit-content',
            padding: '2px',
            color: color,
            cursor: 'text'
        }} 
        onClick={onClick} 
        contentEditable onBlur={handleTextChange}
        dangerouslySetInnerHTML={{ __html: text }}></span>
    );
}

export default TextZone;