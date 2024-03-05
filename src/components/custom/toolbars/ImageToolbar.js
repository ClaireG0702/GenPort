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

    const { top, left, border, borderColor, borderRadius } = imageProps[element.id];

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