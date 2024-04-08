
function TextZone({ id, component }) {
    const { position_x, position_y } = component;
    const { texte, alignment, police, textSize, color, style, weight, decoration } = component.values;

    let textStyle = style ? 'italic' : '';
    let textWeight = weight ? 'bold' : '';
    let textDecoration = decoration ? 'underline' : '';

    return (
        <span id={id}
            style={{
                position: 'absolute',
                top: `${position_y}%`,
                left: `${position_x}%`,
                textAlign: alignment,
                fontFamily: police,
                fontSize: `${textSize}px`,
                color: color,
                fontStyle: textStyle,
                fontWeight: textWeight,
                textDecoration: textDecoration
            }}>{texte}</span>
    );
}

export default TextZone;