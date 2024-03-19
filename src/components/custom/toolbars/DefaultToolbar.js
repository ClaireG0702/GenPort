import { Toolbar, Input } from "@mui/material";
import { Button } from "react-bootstrap";
import '../Toolbar.scss';

function DefaultToolbar({ modelData, setModelData, saveTemplateHandler }) {
    const name = modelData.name;

    const handleNameChange = (event) => {
        const { value } = event.target;
        setModelData(prevState => ({
            ...prevState,
            name: value  
        }));
    }

    const handleSaveTemplate = () => {
        saveTemplateHandler();
    };

    return (
        <Toolbar className="default-toolbar">
            <Input name='modele_name' value={name} onChange={(event) => handleNameChange(event)} placeholder='Nom du modèle' />
            <Button onClick={handleSaveTemplate}>Enregistrer</Button>
        </Toolbar>
    );
}

export default DefaultToolbar;