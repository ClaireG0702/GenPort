import { ToggleButtonGroup, ToggleButton, Toolbar, MenuItem, Select, InputLabel, FormControl, Typography, FormControlLabel, Checkbox, Grid } from "@mui/material";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import '../Toolbar.scss';

function TextToolbar({ element, updateComponentParams, updateComponentValues, deleteComponent }) {
    const [values, setValues] = useState(element);
    const [isBoldCheck, setIsBoldCheck] = useState(false);
    const [isItalicCheck, setIsItalicCheck] = useState(false);
    const [isUnderlineCheck, setIsUnderlineCheck] = useState(false);

    // Initialise la barre d'outil avec les valeurs de l'élément sélectionné
    useEffect(() => {
        setValues(element);
        const { style, weight, decoration } = element.values;
        setIsBoldCheck(weight);
        setIsItalicCheck(style);
        setIsUnderlineCheck(decoration);
    }, [element]);

    const { position_y, position_x, z_index, height, width } = values;
    const { alignment, police, textSize, color } = values.values
    const initialWidth = document.getElementsByClassName('card-body')[0].clientWidth;
    const initialHeight = document.getElementsByClassName('card-body')[0].clientHeight;

    // Change les paramètres de l'élément (position et taille)
    const handleElementParamsChange = (event, propName) => {
        const { value } = event.target;
        setValues(prevValues => ({
            ...prevValues,
            [propName]: value
        }));
        updateComponentParams(element.id, propName, value);
    }

    // Change les priopriétés de l'élément (alignement, style, police, taille du texte, couleur)
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
        <Toolbar className="toolbar-element">
            <Grid container justifyContent="space-between">
                <Grid item>
                    <Typography variant="subtitle1">Position en y :</Typography>
                    <input type="number" value={position_y} min={0} max={initialHeight-height} onChange={(event) => handleElementParamsChange(event, 'position_y')} />
                </Grid>

                <Grid item>
                    <Typography variant="subtitle1">Position en x :</Typography>
                    <input type="number" value={position_x} min={0} max={initialWidth-width} onChange={(event) => handleElementParamsChange(event, 'position_x')} />
                </Grid>

                <Grid item>
                    <Typography>Calque :</Typography>
                    <input type="number" value={z_index} onChange={(event) => handleElementParamsChange(event, 'z_index')} />
                </Grid>

                <Grid item>
                    <Typography>Largeur :</Typography>
                    <input type="number" value={width} onChange={(event) => handleElementParamsChange(event, 'width')} />
                </Grid>

                <Grid item>
                    <Typography>Hauteur :</Typography>
                    <input type="number" value={height} onChange={(event) => handleElementParamsChange(event, 'height')} />
                </Grid>

                <Grid item>
                    <ToggleButtonGroup value={alignment} exclusive onChange={(event) => handleElementValueChange(event, 'alignment')} aria-label="text alignment">
                        <ToggleButton value="left" aria-label="left aligned">
                            <FormatAlignLeftIcon />
                        </ToggleButton>
                        <ToggleButton value="center" aria-label="centered">
                            <FormatAlignCenterIcon />
                        </ToggleButton>
                        <ToggleButton value="right" aria-label="right aligned">
                            <FormatAlignRightIcon />
                        </ToggleButton>
                        <ToggleButton value="justify" aria-label="justified">
                            <FormatAlignJustifyIcon />
                        </ToggleButton>
                    </ToggleButtonGroup>
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
                    <Typography variant="subtitle1">Taille de texte :</Typography>
                    <input type="number" value={textSize} onChange={(event) => handleElementValueChange(event, 'textSize')} />
                </Grid>

                <Grid item>
                    <Typography variant="subtitle1">Couleur :</Typography>
                    <input type="color" value={color} onChange={(event) => handleElementValueChange(event, 'color')} />
                </Grid>

                <Grid item justifyContent="flex-end">
                    <Button variant="danger" onClick={handleDeleteClick}><DeleteIcon /></Button>
                </Grid>
            </Grid>
        </Toolbar>
    );
}

export default TextToolbar;