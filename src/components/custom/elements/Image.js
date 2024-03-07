function Image({ id, component, position_y, position_x, width, height, border, borderColor, borderRadius, onClick }) {
    
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
                top: `${position_y}px`,
                left: `${position_x}px`,
                border: `${border}px solid ${borderColor}`,
                borderRadius: `${borderRadius}`
            }}
            onClick={onClick}></img>
    );
}

export default Image;