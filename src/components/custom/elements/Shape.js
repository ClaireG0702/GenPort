
function Shape({ id, component, onClick }) {
    
    const { position_x, position_y, width, height, zIndex } = component;
	const { color, border, borderColor, borderRadius } = component.values;
    
    return (
        <div id={id}
            style={{
                position: 'absolute',
                top: `${position_y}%`,
                left: `${position_x}%`,
                zIndex: zIndex,
                width: `${width}%`,
                height: `${height}%`,
                backgroundColor: color,
                border: `${border}px solid ${borderColor}`,
                borderRadius: `${borderRadius}px`
            }} 
            onClick={() => onClick(id, component)} ></div>
    );
}

export default Shape;