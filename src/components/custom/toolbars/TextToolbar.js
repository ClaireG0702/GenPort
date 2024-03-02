import { ToggleButtonGroup, ToggleButton, Divider, Toolbar, Menu, MenuItem } from "@mui/material";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import '../Toolbar.scss';

function TextToolbar({selectedElement}) {
    const [alignment, setAlignment] = useState('left');
	const [formats, setFormats] = useState(() => ['italic']);
    const [textColor, setTextColor] = useState('#000000');
    const [colorMenuOpen, setColorMenuOpen] = useState(false);

	const handleFormat = (event, newFormats) => {
		setFormats(newFormats);
	};

	const handleAlignment = (event, newAlignment) => {
		setAlignment(newAlignment);
	};

    const handleColorChange = (color) => {
        setTextColor(color);
    };

    const handleOpenColorMenu = () => {
        setColorMenuOpen(true);
        document.getElementById('color_menu').style.display = "block"; 
    }

    const handleCloseColorMenu = () => {
        setColorMenuOpen(false);
        document.getElementById('color_menu').style.display = "none"; 
    }

    return (
        <Toolbar>
            <ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment} aria-label="text alignment">
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
            <ToggleButtonGroup value={formats} onChange={handleFormat} aria-label="text formatting">
                <ToggleButton value="bold" aria-label="bold">
                    <FormatBoldIcon />
                </ToggleButton>
                <ToggleButton value="italic" aria-label="italic">
                    <FormatItalicIcon />
                </ToggleButton>
                <ToggleButton value="underlined" aria-label="underlined">
                    <FormatUnderlinedIcon />
                </ToggleButton>
                <ToggleButton value="color" aria-label="color">
                    <FormatColorFillIcon />
                    <ArrowDropDownIcon />
                </ToggleButton>
                <Menu
                    id="color-menu"
                    anchorEl={null}
                    open={colorMenuOpen}
                    onClick={handleOpenColorMenu}
                    onClose={handleCloseColorMenu}
                    MenuListProps={{
                        'aria-labelledby': 'color-button',
                    }}
                >
                    <MenuItem>
                        <input
                            id="color_menu"
                            type="color"
                            value={textColor}
                            onChange={(e) => handleColorChange(e.target.value)}
                            style={{ display: 'none' }}
                        />
                        <label htmlFor="color-picker">
                            Select Text Color
                        </label>
                    </MenuItem>
                </Menu>
            </ToggleButtonGroup>
        </Toolbar>
    );
}

export default TextToolbar;