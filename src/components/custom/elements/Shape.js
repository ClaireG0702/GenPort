function Shape({ id, width, height, top, left, color, border, borderColor, onClick }) {
    return (
        <div style={{
            width: `${width}px`,
            height: `${height}px`,
            position: 'relative',
            top: `${top}px`,
            left: `${left}px`,
            backgroundColor: color,
            border: `${border}px solid ${borderColor}`
        }} onClick={onClick} id={id}></div>
    );
}

export default Shape;