function Shape({ id, component, position_y, position_x, width, height, color, border, borderColor, borderRadius, onClick }) {
    
    if(component) {
        position_x = component.position_x;
        position_y = component.position_y;
        width = component.width;
        height = component.height;
    }
    
    return (
        <div id={id}
            style={{
                position: 'absolute',
                top: `${position_y}px`,
                left: `${position_x}px`,
                width: `${width}px`,
                height: `${height}px`,
                backgroundColor: color,
                border: `${border}px solid ${borderColor}`,
                borderRadius: `${borderRadius}`
            }} onClick={onClick} ></div>
    );
}

export default Shape;