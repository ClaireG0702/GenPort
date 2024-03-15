import { Toolbar, Typography, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../Toolbar.scss';

function ElemToolbar({ element, updateComponentParams, updateComponentValues }) {
    const [values, setValues] = useState(element);

    useEffect(() => {
        setValues(element);
    }, [element]);
    
    const { position_y, position_x, width, height, zIndex } = values;
    const { color, border, borderColor, borderRadius } = values.values;
    
    const handleElementParamsChange = (event, propName) => {
        const { value } = event.target;
        setValues(prevParams => ({
            ...prevParams,
            [propName]: value
        }));
        updateComponentParams(element.id, propName, parseInt(value));
    };

    const handleElementValueChange = (event, propName) => {
        const { value } = event.target;
        setValues(prevValues => ({
            ...prevValues,
            [propName]: value
        }));
        if(propName === 'border' || propName === 'borderRadius') {
            updateComponentValues(element.id, propName, parseInt(value));
        } else {
            updateComponentValues(element.id, propName, value)
        }
    }

    return (
        <Toolbar className='toolbar-element'>
            <Grid container justifyContent="space-between">
                <Grid item>
                    <Typography variant="subtitle1">Longueur :</Typography>
                    <input type="number" value={width} min={0} max={100} onChange={(event) => handleElementParamsChange(event, 'width')} />
                </Grid>

                <Grid item>
                    <Typography variant="subtitle1">Hauteur :</Typography>
                    <input type="number" value={height} min={0} max={100} onChange={(event) => handleElementParamsChange(event, 'height')} />
                </Grid>

                <Grid item>
                    <Typography variant="subtitle1">Position en y :</Typography>
                    <input type="number" value={position_y} onChange={(event) => handleElementParamsChange(event, 'position_y')} />
                </Grid>

                <Grid item>
                    <Typography variant="subtitle1">Position en x :</Typography>
                    <input type="number" value={position_x} onChange={(event) => handleElementParamsChange(event, 'position_x')} />
                </Grid>

                <Grid item>
                    <Typography variant="subtitle1">Couleur :</Typography>
                    <input type="color" value={color} onChange={(event) => handleElementValueChange(event, 'color')} />
                </Grid>

                <Grid item>
                    <Typography variant="subtitle1">Bordure :</Typography>
                    <input type="number" value={border} onChange={(event) => handleElementValueChange(event, 'border')} />
                </Grid>

                <Grid item>
                    <Typography variant="subtitle1">Couleur de bordure:</Typography>
                    <input type="color" value={borderColor} onChange={(event) => handleElementValueChange(event, 'borderColor')} />
                </Grid>

                <Grid item >
                    <Typography variant="subtitle1">Arrondi :</Typography>
                    <input type="number" value={borderRadius} onChange={(event) => handleElementValueChange(event, 'borderRadius')} />
                </Grid>
            </Grid>
        </Toolbar>
    );
}

export default ElemToolbar;