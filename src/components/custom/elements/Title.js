import { useState } from "react";

function Title({ id, color, onClick }) {
    const [text, setText] = useState('Titre');

    const handleTextChange = (event) => {
        setText(event.target.textContent);
    }

    return (
        <h1 id={id}
        style={{
            width: 'fit-content',
            padding: '2px',
            color: color,
            cursor: 'text'
        }} 
        onClick={onClick} 
        contentEditable onBlur={handleTextChange}
        dangerouslySetInnerHTML={{ __html: text }}></h1>
    );
}

export default Title;