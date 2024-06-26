import DeleteIcon from "@mui/icons-material/Delete";
import { Grid, Toolbar, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Button } from "react-bootstrap";
import '../Toolbar.scss';

function ImageToolbar({ element, updateComponentParams, updateComponentValues, deleteComponent }) {
    const [values, setValues] = useState(element);

    useEffect(() => {
        setValues(element);
    }, [element]);

    const { position_y, position_x, z_index, height, width } = values;
    const { link, border, borderColor, borderRadius } = values.values;

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
        updateComponentValues(element.id, propName, value);
    }

    const handleDeleteClick = () => {
        deleteComponent(element);
    }

    return (
        <Toolbar className='toolbar-element'>
            <Grid container justifyContent="space-between">
                <Grid item>
                    <Typography variant='subtitle1'>Lien de l'image :</Typography>
                    <input type="url" value={link} className='form-control' onChange={(event) => handleElementValuesChange(event, 'link')} />
                </Grid>

                <Grid item>
                    <Typography variant="subtitle1">Marge en haut :</Typography>
                    <input type="number" value={position_y} min={0} max={100-height} className='form-control' onChange={(event) => handleElementParamsChange(event, 'position_y')} />
                </Grid>

                <Grid item>
                    <Typography variant="subtitle1">Marge à gauche :</Typography>
                    <input type="number" value={position_x} min={0} max={100-width} className='form-control' onChange={(event) => handleElementParamsChange(event, 'position_x')} />
                </Grid>

                <Grid item>
                    <Typography variant="subtitle1">Calque :</Typography>
                    <input type="number" value={z_index} className='form-control' onChange={(event) => handleElementParamsChange(event, 'z_index')} />
                </Grid>

                <Grid item>
                    <Typography variant="subtitle1">Taille:</Typography>
                    <input type="number" value={height} min={0} max={100} className='form-control' onChange={(event) => handleElementParamsChange(event, 'height')} />
                </Grid>

                <Grid item>
                    <Typography variant="subtitle1">Bordure :</Typography>
                    <input type="number" value={border} min={0} className='form-control' onChange={(event) => handleElementValuesChange(event, 'border')} />
                </Grid>

                <Grid item>
                    <Typography variant="subtitle1">Couleur de bordure :</Typography>
                    <input type="color" value={borderColor} className='form-control' onChange={(event) => handleElementValuesChange(event, 'borderColor')} />
                </Grid>

                <Grid item>
                    <Typography variant="subtitle1">Arrondi :</Typography>
                    <input type="number" value={borderRadius} min={0} className='form-control' onChange={(event) => handleElementValuesChange(event, 'borderRadius')} />
                </Grid>

                <Grid item justifyContent="flex-end">
                    <Button variant="danger" onClick={handleDeleteClick}><DeleteIcon /></Button>
                </Grid>
            </Grid>
        </Toolbar>
    );
}

export default ImageToolbar;