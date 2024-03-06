import React from 'react';
import { Toolbar, Typography, Grid } from '@mui/material';
import '../Toolbar.scss';

function ElemToolbar({ shapeProps, setShapeProps, element }) {

    const handleInputChange = (event, propName) => {
        const { value } = event.target;
        setShapeProps(prevState => ({
            ...prevState,
            [element.id]: {
                ...prevState[element.id],
                [propName]: value
            }
        }));
    };

    const { width, height, top, left, color, border, borderColor, borderRadius } = shapeProps[element.id];

    return (
        <Toolbar className='toolbar-element'>
            <Grid container justifyContent="space-between">
                <Grid item>
                    <Typography variant="subtitle1">Longueur :</Typography>
                    <input type="number" value={width} min={0} max={1453} onChange={(event) => handleInputChange(event, 'width')} />
                </Grid>

                <Grid item>
                    <Typography variant="subtitle1">Hauteur :</Typography>
                    <input type="number" value={height} min={0} max={318} onChange={(event) => handleInputChange(event, 'height')} />
                </Grid>

                <Grid item>
                    <Typography variant="subtitle1">Marge en haut :</Typography>
                    <input type="number" value={top} onChange={(event) => handleInputChange(event, 'top')} />
                </Grid>

                <Grid item>
                    <Typography variant="subtitle1">Marge à gauche :</Typography>
                    <input type="number" value={left} onChange={(event) => handleInputChange(event, 'left')} />
                </Grid>

                <Grid item>
                    <Typography variant="subtitle1">Couleur :</Typography>
                    <input type="color" value={color} onChange={(event) => handleInputChange(event, 'color')} />
                </Grid>

                <Grid item>
                    <Typography variant="subtitle1">Bordure :</Typography>
                    <input type="number" value={border} onChange={(event) => handleInputChange(event, 'border')} />
                </Grid>

                <Grid item>
                    <Typography variant="subtitle1">Couleur de bordure:</Typography>
                    <input type="color" value={borderColor} onChange={(event) => handleInputChange(event, 'borderColor')} />
                </Grid>

                <Grid item >
                    <Typography variant="subtitle1">Arrondi :</Typography>
                    <input type="number" value={borderRadius} onChange={(event) => handleInputChange(event, 'borderRadius')} />
                </Grid>
            </Grid>
        </Toolbar>
    );
}

export default ElemToolbar;