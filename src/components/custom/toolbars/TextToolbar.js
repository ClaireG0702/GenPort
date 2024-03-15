import { ToggleButtonGroup, ToggleButton, Toolbar, MenuItem, Select, InputLabel, FormControl, Typography, FormControlLabel, Checkbox, Grid } from "@mui/material";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { useEffect, useState } from "react";
import '../Toolbar.scss';

function TextToolbar({ element, updateComponentElement, updateComponentElementValue }) {
    const [values, setValues] = useState(element);
    const [isBoldCheck, setIsBoldCheck] = useState(false);
    const [isItalicCheck, setIsItalicCheck] = useState(false);
    const [isUnderlineCheck, setIsUnderlineCheck] = useState(false);

    // Initialise la barre d'outil avec les valeurs de l'élément sélectionné
    useEffect(() => {
        setValues(element);
    }, [element]);

    // Change les paramètres de l'élément (position et taille)
    const handleElementChange = (event, propName) => {
        const { value } = event.target;
        setValues(prevValues => ({
            ...prevValues,
            [propName]: value
        }));
        updateComponentElement(element.id, propName, parseInt(value));
    };

    // Change les priopriétés de l'élément (alignement, style, police, taille du texte, couleur)
    const handleElementValueChange = (event, propName) => {
        const { value } = event.target;
        setValues(prevValues => ({
            ...prevValues,
            values: {
                ...prevValues.values,
                [propName]: value
            }
        }));
        updateComponentElementValue(element.id, propName, value);
    }

    const { position_y, position_x } = values;
    const { alignment, police, textSize, color } = values.values

    return (
        <Toolbar className="toolbar-element">
            <Grid container justifyContent="space-between">
                <Grid item>
                    <Typography variant="subtitle1">Marge en haut :</Typography>
                    <input type="number" value={position_y} onChange={(event) => handleElementChange(event, 'position_y')} />
                </Grid>

                <Grid item>
                    <Typography variant="subtitle1">Marge à gauche :</Typography>
                    <input type="number" value={position_x} onChange={(event) => handleElementChange(event, 'position_x')} />
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
                    <div role="group">
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
                            <MenuItem value="Arial" selected>Arial</MenuItem>
                            <MenuItem value="Verdana">Verdana</MenuItem>
                            <MenuItem value="Helvetica">Helvetica</MenuItem>
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
            </Grid>
        </Toolbar>
    );
}

export default TextToolbar;