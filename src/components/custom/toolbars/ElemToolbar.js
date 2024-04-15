import { Toolbar, Typography, Grid } from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import '../Toolbar.scss';

function ElemToolbar({ element, updateComponentParams, updateComponentValues, deleteComponent }) {
    const [values, setValues] = useState(element);

    useEffect(() => {
        setValues(element);
    }, [element]);
    
    const { position_y, position_x, z_index, width, height } = values;
    const { color, border, borderColor, borderRadius } = values.values;
    
    const handleElementParamsChange = (event, propName) => {
        const { value } = event.target;
        setValues(prevParams => ({
            ...prevParams,
            [propName]: value
        }));
        updateComponentParams(element.id, propName, value);
    };

    const handleElementValueChange = (event, propName) => {
        const { value } = event.target;
        setValues(prevValues => ({
            ...prevValues,
            [propName]: value
        }));
        updateComponentValues(element.id, propName, value)
    }

    const handleDeleteClick = () => {
        deleteComponent(element);
    }

    return (
        <Toolbar className='toolbar-element'>
            <Grid container justifyContent="space-between">
                <Grid item>
                    <Typography variant="subtitle1">Largeur :</Typography>
                    <input type="number" value={width} min={0} max={100} onChange={(event) => handleElementParamsChange(event, 'width')} />
                </Grid>

                <Grid item>
                    <Typography variant="subtitle1">Hauteur :</Typography>
                    <input type="number" value={height} min={0} max={100} onChange={(event) => handleElementParamsChange(event, 'height')} />
                </Grid>

                <Grid item>
                    <Typography variant="subtitle1">Position en y :</Typography>
                    <input type="number" value={position_y} min={0} max={100-height} onChange={(event) => handleElementParamsChange(event, 'position_y')} />
                </Grid>

                <Grid item>
                    <Typography variant="subtitle1">Position en x :</Typography>
                    <input type="number" value={position_x} min={0} max={100-width} onChange={(event) => handleElementParamsChange(event, 'position_x')} />
                </Grid>

                <Grid item>
                    <Typography>Calque :</Typography>
                    <input type="number" value={z_index} onChange={(event) => handleElementParamsChange(event, 'z_index')} />
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

                <Grid item justifyContent="flex-end">
                    <Button variant="danger" onClick={handleDeleteClick}><DeleteIcon /></Button>
                </Grid>
            </Grid>
        </Toolbar>
    );
}

export default ElemToolbar;