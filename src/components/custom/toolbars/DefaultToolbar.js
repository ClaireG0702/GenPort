import { Toolbar, Button, Input } from "@mui/material";
import '../Toolbar.scss';

function DefaultToolbar({ templateData, setTemplateData, saveTemplateHandler }) {
    const name = templateData.name;

    const handleNameChange = (event) => {
        const { value } = event.target;
        setTemplateData(prevState => ({
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