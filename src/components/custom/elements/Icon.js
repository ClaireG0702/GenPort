function Icon({ id, component, position_y, position_x, width, height, color, onClick }) {
    
    if(component) {
        position_x = component.position_x;
        position_y = component.position_y;
        width = component.width;
        height = component.height;
    }
    
    return (
        <i id={id}
            style={{
                position: 'absolute',
                top: `${position_y}px`,
                left: `${position_x}px`,
                color: color
            }}
            onClick={onClick} ></i>
    );
}

export default Icon;