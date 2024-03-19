import { Toolbar, Input } from "@mui/material";
import { Button } from "react-bootstrap";
import '../custom/Toolbar.scss';

function PreviewToolbar({ name }) {

    return (
        <Toolbar className="preview-toolbar">
            <h3>{name}</h3>
            <Button variant="warning">Modifer le portfolio</Button>
        </Toolbar>
    );
}

export default PreviewToolbar;