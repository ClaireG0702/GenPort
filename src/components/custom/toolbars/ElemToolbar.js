import React from 'react';
import { Toolbar, Divider, Typography, Grid } from '@mui/material';
import '../Toolbar.scss';

function ElemToolbar({ shapeProps, setShapeProps, element }) {
    console.log(shapeProps);
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

    // Only display toolbar for the selected shape ID
    if (!shapeProps[element.id]) return null;

    const { width, height, top, left, color, border, borderColor } = shapeProps[element.id];

    return (
        <Toolbar>
            <Grid container>
                <Typography variant="h6">Longueur :</Typography>
                <input type="number" value={width} min={0} max={1453} onChange={(event) => handleInputChange(event, 'width')} />

                <Typography variant="h6">Hauteur :</Typography>
                <input type="number" value={height} min={0} max={318} onChange={(event) => handleInputChange(event, 'height')} />

                <Typography variant="h6">Marge en haut :</Typography>
                <input type="number" value={top} onChange={(event) => handleInputChange(event, 'top')} />

                <Typography variant="h6">Marge à gauche :</Typography>
                <input type="number" value={left} onChange={(event) => handleInputChange(event, 'left')} />

                <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />

                <Typography variant="h6">Couleur :</Typography>
                <input type="color" value={color} onChange={(event) => handleInputChange(event, 'color')} />

                <Typography variant="h6">Bordure :</Typography>
                <input type="number" value={border} onChange={(event) => handleInputChange(event, 'border')} />

                <Typography variant="h6">Couleur de bordure:</Typography>
                <input type="color" value={borderColor} onChange={(event) => handleInputChange(event, 'borderColor')} />
            </Grid>
        </Toolbar>
    );
}

export default ElemToolbar;