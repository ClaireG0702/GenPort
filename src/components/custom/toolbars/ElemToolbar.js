import React, { useState } from 'react';
import { Toolbar, Divider, Typography, Grid } from '@mui/material';
import '../Toolbar.scss';

function ElemToolbar({ shapeProps, setShapeProps }) {
    const handleInputChange = (event, propName) => {
        const { value } = event.target;
        setShapeProps(prevState => ({
            ...prevState,
            [propName]: value
        }));
    };

    return (
        <Toolbar>
            <Grid container>
                <Grid item>
                    <Typography variant="h6">Longueur :</Typography>
                    <input type="number" value={shapeProps.width} min={0} max={1453} onChange={(event) => handleInputChange(event, 'width')} />
                </Grid>

                <Typography variant="h6">Hauteur :</Typography>
                <input type="number" value={shapeProps.height} min={0} max={318} onChange={(event) => handleInputChange(event, 'height')} />

                <Typography variant="h6">Marge en haut :</Typography>
                <input type="number" value={shapeProps.top} onChange={(event) => handleInputChange(event, 'top')} />

                <Typography variant="h6">Marge à gauche :</Typography>
                <input type="number" value={shapeProps.left} onChange={(event) => handleInputChange(event, 'left')} />

                <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />

                <Typography variant="h6">Couleur :</Typography>
                <input type="color" value={shapeProps.color} onChange={(event) => handleInputChange(event, 'color')} />

                <Typography variant="h6">Bordure :</Typography>
                <input type="number" value={shapeProps.border} onChange={(event) => handleInputChange(event, 'border')} />

                <Typography variant="h6">Couleur de bordure:</Typography>
                <input type="color" value={shapeProps.borderColor} onChange={(event) => handleInputChange(event, 'borderColor')} />
            </Grid>
        </Toolbar>
    );
}

export default ElemToolbar;