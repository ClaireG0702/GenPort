import { Grid, Toolbar, Typography } from '@mui/material';
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

    const { position_y, position_x, color } = iconProps[element.id];

    return (
        <Toolbar className='toolbar-element'>
            <Grid container justifyContent="space-between">
                <Grid item>
                    <Typography variant="h6">Marge en haut :</Typography>
                    <input type="number" value={position_y} onChange={(event) => handleInputChange(event, 'position_y')} />
                </Grid>

                <Grid item>
                    <Typography variant="h6">Marge à gauche :</Typography>
                    <input type="number" value={position_x} onChange={(event) => handleInputChange(event, 'position_x')} />
                </Grid>

                <Grid item>
                    <Typography variant="h6">Couleur :</Typography>
                    <input type="number" value={color} onChange={(event) => handleInputChange(event, 'color')} />
                </Grid>
            </Grid>
        </Toolbar>
    );
}

export default IconToolbar;