import { Toolbar, Typography } from '@mui/material';
import '../Toolbar.scss';

function IconToolbar({ iconProps, setIconProps, element }) {

    const handleInputChange = (event, propName) => {
        const { value } = event.target;
        setIconProps(prevState => ({
            ...prevState,
            [element.id]: {
                ...prevState[element.id],
                [propName]: value
            }
        }));
    };

    const { top, left, color } = iconProps[element.id];

    return (
        <Toolbar>
            <Typography variant="h6">Marge en haut :</Typography>
            <input type="number" value={top} onChange={(event) => handleInputChange(event, 'top')} />

            <Typography variant="h6">Marge à gauche :</Typography>
            <input type="number" value={left} onChange={(event) => handleInputChange(event, 'left')} />

            <Typography variant="h6">Couleur :</Typography>
            <input type="number" value={color} onChange={(event) => handleInputChange(event, 'color')} />
        </Toolbar>
    );
}

export default IconToolbar;