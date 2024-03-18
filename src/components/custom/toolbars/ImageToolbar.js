import { Grid, Toolbar, Typography } from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "react-bootstrap";
import { useEffect, useState } from 'react';
import '../Toolbar.scss';

function ImageToolbar({ element, updateComponentParams, updateComponentValues, deleteComponent }) {
    const [values, setValues] = useState(element);

    useEffect(() => {
        setValues(element);
    }, [element]);

    const { position_y, position_x, width, height } = values;
    const { border, borderColor, borderRadius } = values.values;

    const handleElementParamsChange = (event, propName) => {
        const { value } = event.target;
        setValues(prevParams => ({
            ...prevParams,
            [propName]: value
        }));
        updateComponentParams(element.id, propName, parseInt(value))
    }

    const handleElementValuesChange = (event, propName) => {
        const { value } = event.target;
        setValues(prevValues => ({
            ...prevValues,
            values: {
                ...prevValues,
                [propName]: value
            }
        }));
        if(propName === 'borderColor') {
            updateComponentValues(element.id, propName, value);
        } else {
            updateComponentValues(element.id, propName, parseInt(value));
        }
    }

    const handleDeleteClick = () => {
        deleteComponent(element);
    }

    return (
        <Toolbar className='toolbar-element'>
            <Grid container justifyContent="space-between">
                <Grid item>
                    <Typography variant="h6">Marge en haut :</Typography>
                    <input type="number" value={position_y} min={0} max={100-height} onChange={(event) => handleElementParamsChange(event, 'position_y')} />
                </Grid>

                <Grid item>
                    <Typography variant="h6">Marge à gauche :</Typography>
                    <input type="number" value={position_x} min={0} max={100-width} onChange={(event) => handleElementParamsChange(event, 'position_x')} />
                </Grid>

                <Grid item>
                    <Typography variant="h6">Taille:</Typography>
                    <input type="number" value={height} min={0} max={100} onChange={(event) => handleElementParamsChange(event, 'height')} />
                </Grid>

                <Grid item>
                    <Typography variant="h6">Bordure :</Typography>
                    <input type="number" value={border} min={0} onChange={(event) => handleElementValuesChange(event, 'border')} />
                </Grid>

                <Grid item>
                    <Typography variant="h6">Couleur de bordure :</Typography>
                    <input type="color" value={borderColor} onChange={(event) => handleElementValuesChange(event, 'borderColor')} />
                </Grid>

                <Grid item>
                    <Typography variant="h6">Arrondi :</Typography>
                    <input type="number" value={borderRadius} min={0} onChange={(event) => handleElementValuesChange(event, 'borderRadius')} />
                </Grid>

                <Grid item justifyContent="flex-end">
                    <Button variant="danger" onClick={handleDeleteClick}><DeleteIcon /></Button>
                </Grid>
            </Grid>
        </Toolbar>
    );
}

export default ImageToolbar;