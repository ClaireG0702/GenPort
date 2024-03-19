function Image({ id, component, onClick }) {

    const { position_y, position_x, width, height } = component;
    const { border, borderColor, borderRadius } = component.values;

    return (
        <img id={id}
            src=""
            alt={'upload-'+id}
            style={{
                position: 'absolute',
                top: `${position_y}%`,
                left: `${position_x}%`,
                width: `${width}%`,
                height: `${height}%`,
                border: `${border}px solid ${borderColor}`,
                borderRadius: `${borderRadius}`
            }}
            onClick={onClick}></img>
    );
}

export default Image;