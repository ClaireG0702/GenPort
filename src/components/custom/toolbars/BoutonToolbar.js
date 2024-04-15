import { useState, useEffect } from 'react';
import { Grid, Toolbar, Typography, FormControlLabel, Checkbox, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "react-bootstrap";
import '../Toolbar.scss';

function BoutonToolbar({ element, updateComponentParams, updateComponentValues, deleteComponent }) {
    const [values, setValues] = useState(element);
    const [isBoldCheck, setIsBoldCheck] = useState(false);
    const [isItalicCheck, setIsItalicCheck] = useState(false);
    const [isUnderlineCheck, setIsUnderlineCheck] = useState(false);

    useEffect(() => {
        setValues(element);
        const { style, weight, decoration } = element.values;
        setIsBoldCheck(weight);
        setIsItalicCheck(style);
        setIsUnderlineCheck(decoration);
    }, [element]);
    
    const { position_y, position_x, z_index } = values;
    const { link, color, police, textSize, border, borderColor, borderRadius, backgroundColor } = values.values;
    const initialHeight = document.getElementsByClassName('card-body')[0].clientHeight;
    const initialWidth = document.getElementsByClassName('card-body')[0].clientWidth;
    const elementHeight = document.getElementById(element.id).clientHeight;
    const elementWidth = document.getElementById(element.id).clientWidth;

    const height = Math.round((elementHeight / initialHeight) * 100);
    const width = Math.round((elementWidth / initialWidth) * 100);

    const handleElementParamsChange = (event, propName) => {
        const { value } = event.target;
        setValues(prevParams => ({
            ...prevParams,
            [propName]: value
        }));
        updateComponentParams(element.id, propName, value);
    };

    const handleElementValueChange = (event, propName) => {
        if (propName === 'style' || propName === 'weight' || propName === 'decoration') {
            const { checked } = event.target;
            switch (propName) {
                case 'style':
                    setIsItalicCheck(checked);
                    break;
                case 'weight':
                    setIsBoldCheck(checked);
                    break;
                case 'decoration':
                    setIsUnderlineCheck(checked);
                    break;
                default:
                    break;
            }
            setValues(prevValues => ({
                ...prevValues,
                values: {
                    ...prevValues.values,
                    [propName]: checked
                }
            }));
            updateComponentValues(element.id, propName, checked);
        } else {
            const { value } = event.target;
            setValues(prevValues => ({
                ...prevValues,
                values: {
                    ...prevValues.values,
                    [propName]: value
                }
            }));
            updateComponentValues(element.id, propName, value);
        }
    }

    const handleDeleteClick = () => {
        deleteComponent(element);
    }

    return (
        <Toolbar className='toolbar-element'>
            <Grid container justifyContent="space-between">
                <Grid item>
                    <Typography>Couleur de fond</Typography>
                    <input type='color' value={backgroundColor} onChange={(event) => handleElementValueChange(event, 'backgroundColor')} />
                </Grid>

                <Grid item>
                    <Typography>Position en y :</Typography>
                    <input type="number" value={position_y} min={0} max={100-height} onChange={(event) => handleElementParamsChange(event, 'position_y')} />
                </Grid>

                <Grid item>
                    <Typography>Position en x :</Typography>
                    <input type="number" value={position_x} min={0} max={100-width} onChange={(event) => handleElementParamsChange(event, 'position_x')} />
                </Grid>

                <Grid item>
                    <Typography>Calque :</Typography>
                    <input type="number" value={z_index} onChange={(event) => handleElementParamsChange(event, 'z_index')} />
                </Grid>

                <Grid item>
                    <Typography>Lien</Typography>
                    <input type="url" value={link} onChange={(event) => handleElementValueChange(event, 'link')} />
                </Grid>

                <Grid item>
                    <div className="group">
                        <FormControlLabel
                            control={
                                <Checkbox className="checkbox" checked={isBoldCheck} onChange={(event) => handleElementValueChange(event, 'weight')}
                                    icon={<FormatBoldIcon />} checkedIcon={<FormatBoldIcon />} />
                            } />
                        <FormControlLabel
                            control={
                                <Checkbox className="checkbox" checked={isItalicCheck} onChange={(event) => handleElementValueChange(event, 'style')}
                                    icon={<FormatItalicIcon />} checkedIcon={<FormatItalicIcon />} />
                            } />
                        <FormControlLabel
                            control={
                                <Checkbox className="checkbox" checked={isUnderlineCheck} onChange={(event) => handleElementValueChange(event, 'decoration')}
                                    icon={<FormatUnderlinedIcon />} checkedIcon={<FormatUnderlinedIcon />} />
                            } />
                    </div>
                </Grid>

                <Grid item>
                    <FormControl>
                        <InputLabel>Police</InputLabel>
                        <Select className="police-select" value={police} onChange={(event) => handleElementValueChange(event, 'police')}>
                            <MenuItem value="Open Sans">Open Sans</MenuItem>
                            <MenuItem value="Oswald">Oswald</MenuItem>
                            <MenuItem value="Roboto">Roboto</MenuItem>
                            <MenuItem value="Sedan">Sedan</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item>
                    <Typography>Taille de texte :</Typography>
                    <input type="number" value={textSize} onChange={(event) => handleElementValueChange(event, 'textSize')} />
                </Grid>

                <Grid item>
                    <Typography>Couleur texte:</Typography>
                    <input type="color" value={color} onChange={(event) => handleElementValueChange(event, 'color')} />
                </Grid>

                <Grid item>
                    <Typography>Bordure :</Typography>
                    <input type="number" value={border} onChange={(event) => handleElementValueChange(event, 'border')} />
                </Grid>

                <Grid item>
                    <Typography>Couleur de bordure:</Typography>
                    <input type="color" value={borderColor} onChange={(event) => handleElementValueChange(event, 'borderColor')} />
                </Grid>

                <Grid item >
                    <Typography>Arrondi :</Typography>
                    <input type="number" value={borderRadius} onChange={(event) => handleElementValueChange(event, 'borderRadius')} />
                </Grid>

                <Grid item justifyContent="flex-end">
                    <Button variant="danger" onClick={handleDeleteClick}><DeleteIcon /></Button>
                </Grid>
            </Grid>
        </Toolbar>
    );
}

export default BoutonToolbar;