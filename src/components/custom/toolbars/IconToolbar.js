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

    const { top, left, color } = iconProps[element.id];

    return (
        <Toolbar className='toolbar-element'>
            <Grid container justifyContent="space-between">
                <Grid item>
                    <Typography variant="h6">Marge en haut :</Typography>
                    <input type="number" value={top} onChange={(event) => handleInputChange(event, 'top')} />
                </Grid>

                <Grid item>
                    <Typography variant="h6">Marge à gauche :</Typography>
                    <input type="number" value={left} onChange={(event) => handleInputChange(event, 'left')} />
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