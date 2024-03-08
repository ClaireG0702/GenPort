import { Toolbar } from "@mui/material";
import { Button, Input } from '@mui/material';
import '../Toolbar.scss';
import { useState } from "react";

function DefaultToolbar({ templateData, saveTemplateHandler }) {

    const [name, setName] = useState('Portfolio');

    const handleNameChange = (event) => {
        const { value } = event.target;
        setName(value);
    }

    const handleSaveTemplate = () => {
        const updatedComponents = { ...templateData, name: name };
        saveTemplateHandler(updatedComponents);
    };

    return (
        <Toolbar>
            <Input name='modele_name' value={name} onChange={(event) => handleNameChange(event)} placeholder='Nom du modèle' />
            <Button onClick={handleSaveTemplate}>Enregistrer</Button>
        </Toolbar>
    );
}

export default DefaultToolbar;