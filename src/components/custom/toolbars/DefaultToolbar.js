import { Input, Toolbar, FormControlLabel, Checkbox, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { Button } from "react-bootstrap";
import '../Toolbar.scss';
import { useAuth } from "../../user/Context/AuthContext";

function DefaultToolbar({ modelData, setModelData, saveTemplateHandler, documentType, setDocumentType }) {
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

    const handleDocumentTypeChange = (event) => {
        const { value } = event.target;
        setDocumentType(value);
    }

    const handleSaveTemplate = () => {
        saveTemplateHandler();
    };

    return (
        <Toolbar className="default-toolbar">
            <Input name='modele_name' value={name} onChange={(event) => handleNameChange(event)} placeholder='Nom du modèle' />
            {user && owner_id === user.id && (
                <>
                    <FormControl className="document-type-select">
                        <InputLabel id="document-type-label">Type de document</InputLabel>
                        <Select
                            labelId="document-type-label"
                            value={documentType}
                            onChange={(event) => handleDocumentTypeChange(event)}
                        >
                            <MenuItem value="templates">Template</MenuItem>
                            <MenuItem value="portfolios">Portfolio</MenuItem>
                        </Select>
                    </FormControl>
                    {documentType === 'templates' &&

                        <FormControlLabel
                            control={<Checkbox checked={is_public} onChange={(event) => handlePublicChange(event)} />}
                            label="Rendre le template publique"
                        />
                    }
                </>
            )}
            <Button className="save-btn" onClick={handleSaveTemplate}>Enregistrer</Button>
        </Toolbar>
    );
}

export default DefaultToolbar;