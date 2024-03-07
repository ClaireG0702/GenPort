import { Grid, Toolbar, Typography } from '@mui/material';
import '../Toolbar.scss';

function ImageToolbar({ imageProps, setImageProps, element }) {

    const handleInputChange = (event, propName) => {
        const { value } = event.target;
        setImageProps(prevState => ({
            ...prevState,
            [element.id]: {
                ...prevState[element.id],
                [propName]: value
            }
        }));
    };

    const { position_y, position_x, border, borderColor, borderRadius } = imageProps[element.id];

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
                    <Typography variant="h6">Bordure :</Typography>
                    <input type="number" value={border} onChange={(event) => handleInputChange(event, 'border')} />
                </Grid>

                <Grid item>
                    <Typography variant="h6">Couleur de bordure :</Typography>
                    <input type="color" value={borderColor} onChange={(event) => handleInputChange(event, 'borderColor')} />
                </Grid>

                <Grid item>
                    <Typography variant="h6">Arrondi :</Typography>
                    <input type="number" value={borderRadius} onChange={(event) => handleInputChange(event, 'borderRadius')} />
                </Grid>
            </Grid>
        </Toolbar>
    );
}

export default ImageToolbar;