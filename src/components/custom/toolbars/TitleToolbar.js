import { ToggleButtonGroup, ToggleButton, Divider, Toolbar, Menu, MenuItem, Select, InputLabel, FormControl, Typography, FormControlLabel, Checkbox } from "@mui/material";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import '../Toolbar.scss';
import { useState } from "react";

function TitleToolbar({ titleProps, setTitleProps, element }) {
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

            setTitleProps(prevState => ({
                ...prevState,
                [element.id]: {
                    ...prevState[element.id],
                    [propName]: checked
                }
            }));
        } else {
            const { value } = event.target;
            setTitleProps(prevState => ({
                ...prevState,
                [element.id]: {
                    ...prevState[element.id],
                    [propName]: value
                }
            }));
        }
    };

    const { top, left, alignment, style, weight, decoration, police, textSize, color } = titleProps[element.id];

    return (
        <Toolbar>
            <Typography variant="h6">Marge en haut :</Typography>
            <input type="number" value={top} onChange={(event) => handleInputChange(event, 'top')} />

            <Typography variant="h6">Marge à gauche :</Typography>
            <input type="number" value={left} onChange={(event) => handleInputChange(event, 'left')} />

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
            <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
            <div>
                <FormControlLabel
                    control={
                        <Checkbox checked={isBoldCheck} onChange={(event) => handleInputChange(event, 'weight')}
                            color="primary" />
                    } label="Bold" />
                <FormControlLabel
                    control={
                        <Checkbox checked={isItalicCheck} onChange={(event) => handleInputChange(event, 'style')}
                            color="primary" />
                    } label="Italic" />
                <FormControlLabel
                    control={
                        <Checkbox checked={isUnderlineCheck} onChange={(event) => handleInputChange(event, 'decoration')}
                            color="primary" />
                    } label="Underline" />
            </div>

            <FormControl>
                <InputLabel>Police</InputLabel>
                <Select value={police} onChange={(event) => handleInputChange(event, 'police')}>
                    <MenuItem value="Arial">Arial</MenuItem>
                    <MenuItem value="Verdana">Verdana</MenuItem>
                    <MenuItem value="Helvetica">Helvetica</MenuItem>
                </Select>
            </FormControl>

            <Typography variant="h6">Taille de texte :</Typography>
            <input type="number" value={textSize} onChange={(event) => handleInputChange(event, 'textSize')} />

            <Typography variant="h6">Couleur :</Typography>
            <input type="color" value={color} onChange={(event) => handleInputChange(event, 'color')} />
        </Toolbar>
    );
}

export default TitleToolbar;