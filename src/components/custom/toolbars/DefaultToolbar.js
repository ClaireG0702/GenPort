import { Toolbar } from "@mui/material";
import { Button, Input } from '@mui/material';
import '../Toolbar.scss';

function DefaultToolbar() {
    const saveModele = () => {
        /**
         * Modal choix type template ou portfolio
         */
    }

    return (
        <Toolbar>
            <Input name='modele_name' placeholder='Nom du modèle' />
            <Button onClick={saveModele}>Enregistrer</Button>
        </Toolbar>
    );
}

export default DefaultToolbar;