function Image({ id, top, left, border, borderColor, borderRadius, onClick }) {
    return (
        <img id={id}
            src=""
            alt={'upload-'+id}
            style={{
                position: 'absolute',
                top: `${top}px`,
                left: `${left}px`,
                border: `${border}px solid ${borderColor}`,
                borderRadius: `${borderRadius}`
            }}
            onClick={onClick}></img>
    );
}

export default Image;