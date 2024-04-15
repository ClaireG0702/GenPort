
function Title({ id, component }) {
    const { position_x, position_y, z_index } = component;
    const { texte, alignment, police, textSize, color, style, weight, decoration } = component.values

    let textStyle = style ? 'italic' : '';
    let textWeight = weight ? 700 : 400;
    let textDecoration = decoration ? 'underline' : '';

    return (
        <h1 id={id}
            style={{
                position: 'absolute',
                top: `${position_y}%`,
                left: `${position_x}%`,
                zIndex: z_index,
                textAlign: alignment,
                fontFamily: police,
                fontSize: `${textSize}px`,
                color: color,
                fontStyle: textStyle,
                fontWeight: textWeight,
                textDecoration: textDecoration,
            }}>{texte}</h1>
    );
}

export default Title;