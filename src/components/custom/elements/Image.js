function Image({ id, component, position_y, position_x, width, height, border, borderColor, borderRadius, onChange, onClick }) {
    
    if(component) {
        position_x = component.position_x;
        position_y = component.position_y;
        width = component.width;
        height = component.height;
    }
    
    return (
        <img id={id}
            src=""
            alt={'upload-'+id}
            style={{
                position: 'absolute',
                top: `${position_y}%`,
                left: `${position_x}%`,
                width: `${width}px`,
                height: `${height}px`,
                border: `${border}px solid ${borderColor}`,
                borderRadius: `${borderRadius}`
            }}
            onClick={onClick}></img>
    );
}

export default Image;