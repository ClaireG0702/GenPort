function Shape({ id, width, height, top, left, color, border, borderColor, borderRadius, onClick }) {
    return (
        <div id={id}
            style={{
                width: `${width}px`,
                height: `${height}px`,
                position: 'relative',
                top: `${top}px`,
                left: `${left}px`,
                backgroundColor: color,
                border: `${border}px solid ${borderColor}`,
                borderRadius: `${borderRadius}`
            }} onClick={onClick} ></div>
    );
}

export default Shape;