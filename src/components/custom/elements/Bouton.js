function Icon({ id, component, onClick }) {
    const { position_x, position_y } = component;
    const { texte, link, police, color, textSize, weight, style, decoration, border, borderColor, borderRadius, backgroundColor } = component.values;
    
    let textStyle = style ? 'italic' : '';
    let textWeight = weight ? 'bold' : '';
    let textDecoration = decoration ? 'underline' : '';

    return (
        <a id={id}
            style={{
                position: 'absolute',
                top: `${position_y}%`,
                left: `${position_x}%`,
                padding: '2px',
                color: color,
                fontFamily: police,
                textSize: `${textSize}px`,
                textAlign: 'center',
                fontStyle: textStyle,
                fontWeight: textWeight,
                textDecoration: textDecoration,
                border: `${border}px solid ${borderColor}`,
                borderRadius: `${borderRadius}px`,
                backgroundColor: backgroundColor
            }}
            href={link}>{texte}</a>
    );
}

export default Icon;