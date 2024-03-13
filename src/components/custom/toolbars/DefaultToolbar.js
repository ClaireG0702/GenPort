import { Toolbar, Button, Input } from "@mui/material";
import { useState } from "react";
import '../Toolbar.scss';

function DefaultToolbar({ templateData, saveTemplateHandler }) {
    const [name, setName] = useState(templateData.name);

    const handleNameChange = (event) => {
        const { value } = event.target;
        setName(value);
    }

    const handleSaveTemplate = () => {
        const updatedComponents = { ...templateData, name: name };
        saveTemplateHandler(updatedComponents);
    };

    return (
        <Toolbar className="default-toolbar">
            <Input name='modele_name' value={name} onChange={(event) => handleNameChange(event)} placeholder='Nom du modèle' />
            <Button onClick={handleSaveTemplate}>Enregistrer</Button>
        </Toolbar>
    );
}

export default DefaultToolbar;