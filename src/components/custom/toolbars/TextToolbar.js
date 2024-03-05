import { ToggleButtonGroup, ToggleButton, Toolbar, MenuItem, Select, InputLabel, FormControl, Typography, FormControlLabel, Checkbox, Grid } from "@mui/material";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { useState } from "react";
import '../Toolbar.scss';

function TextToolbar({ textProps, setTextProps, element }) {
    const [isBoldCheck, setIsBoldCheck] = useState(false);
    const [isItalicCheck, setIsItalicCheck] = useState(false);
    const [isUnderlineCheck, setIsUnderlineCheck] = useState(false);

    const handleInputChange = (event, propName) => {
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

            setTextProps(prevState => ({
                ...prevState,
                [element.id]: {
                    ...prevState[element.id],
                    [propName]: checked
                }
            }));
        } else {
            const { value } = event.target;
            setTextProps(prevState => ({
                ...prevState,
                [element.id]: {
                    ...prevState[element.id],
                    [propName]: value
                }
            }));
        }
    };

    const { top, left, alignment, police, textSize, color } = textProps[element.id];

    return (
        <Toolbar className="toolbar-element">
            <Grid container justifyContent="space-between">
                <Grid item>
                    <Typography variant="subtitle1">Marge en haut :</Typography>
                    <input type="number" value={top} onChange={(event) => handleInputChange(event, 'top')} />
                </Grid>

                <Grid item>
                    <Typography variant="subtitle1">Marge à gauche :</Typography>
                    <input type="number" value={left} onChange={(event) => handleInputChange(event, 'left')} />
                </Grid>

                <Grid item>
                    <ToggleButtonGroup value={alignment} exclusive onChange={(event) => handleInputChange(event, 'alignment')} aria-label="text alignment">
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
                                <Checkbox className="checkbox" checked={isBoldCheck} onChange={(event) => handleInputChange(event, 'weight')}
                                    icon={<FormatBoldIcon />} checkedIcon={<FormatBoldIcon />} />
                            } />
                        <FormControlLabel
                            control={
                                <Checkbox className="checkbox" checked={isItalicCheck} onChange={(event) => handleInputChange(event, 'style')}
                                    icon={<FormatItalicIcon />} checkedIcon={<FormatItalicIcon />} />
                            } />
                        <FormControlLabel
                            control={
                                <Checkbox className="checkbox" checked={isUnderlineCheck} onChange={(event) => handleInputChange(event, 'decoration')}
                                    icon={<FormatUnderlinedIcon />} checkedIcon={<FormatUnderlinedIcon />} />
                            } />
                    </div>
                </Grid>

                <Grid item>
                    <FormControl>
                        <InputLabel>Police</InputLabel>
                        <Select value={police} onChange={(event) => handleInputChange(event, 'police')}>
                            <MenuItem value="Arial">Arial</MenuItem>
                            <MenuItem value="Verdana">Verdana</MenuItem>
                            <MenuItem value="Helvetica">Helvetica</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item>
                    <Typography variant="subtitle1">Taille de texte :</Typography>
                    <input type="number" value={textSize} onChange={(event) => handleInputChange(event, 'textSize')} />
                </Grid>

                <Grid item>
                    <Typography variant="subtitle1">Couleur :</Typography>
                    <input type="color" value={color} onChange={(event) => handleInputChange(event, 'color')} />
                </Grid>
            </Grid>
        </Toolbar>
    );
}

export default TextToolbar;