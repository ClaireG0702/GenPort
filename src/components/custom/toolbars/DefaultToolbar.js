import { Input, Toolbar, FormControlLabel, Checkbox } from "@mui/material";
import { Button } from "react-bootstrap";
import '../Toolbar.scss';
import { useAuth } from "../../user/Context/AuthContext";

function DefaultToolbar({ modelData, setModelData, saveTemplateHandler, model }) {
    const { user } = useAuth();
    const { name, owner_id, is_public } = modelData;

    const handleNameChange = (event) => {
        const { value } = event.target;
        setModelData(prevState => ({   
            ...prevState,
            name: value
        }));
    }

    const handlePublicChange = (event) => {
        const { checked } = event.target;
        setModelData(prevState => ({
            ...prevState,
            is_public: checked
        }));
    }

    const handleSaveTemplate = () => {
        saveTemplateHandler();
    };

    return (
        <Toolbar className="default-toolbar">
            <Input name='modele_name' value={name} onChange={(event) => handleNameChange(event)} placeholder='Nom du modèle' />
            {user && owner_id === user.id && (
                <FormControlLabel
                    control={<Checkbox checked={is_public} onChange={(event) => handlePublicChange(event)} />}
                    label="Rendre le template publique"
                />
            )}
            <Button className="save-btn" onClick={handleSaveTemplate}>Enregistrer</Button>
        </Toolbar>
    );
}

export default DefaultToolbar;