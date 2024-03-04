function Icon({ id, top, left, color, onClick }) {
    return (
        <i id={id}
            style={{
                position: 'relative',
                top: `${top}px`,
                left: `${left}px`,
                color: color
            }}
            onClick={onClick} ></i>
    );
}

export default Icon;