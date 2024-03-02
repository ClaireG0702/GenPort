import { Card, Nav } from 'react-bootstrap';
import './Sidebar.scss';
import { Button, Input } from '@mui/material';

function SidebarComponents({ addComponent, setSelectedElement }) {
    const handleClick = (component) => {
        addComponent(component);
        setSelectedElement(component);
    }

    const saveModele = () => {
        /**
         * Modal choix type template ou portfolio
         */
    }

    return (
        <aside>
            <Nav>
                <Input placeholder='Nom du modèle' />
                <Button onClick={saveModele}>Enregistrer</Button>
                <hr/>
                <Card className='elements' onClick={() => handleClick({ elem: 'div' })}>
                    <Nav.Item>Forme</Nav.Item>
                </Card>
                <Card className='elements' onClick={() => handleClick({ elem: 'h1' })}>
                    <Nav.Item>Titre</Nav.Item>
                </Card>
                <Card className='elements' onClick={() => handleClick({ elem: 'span' })}>
                    <Nav.Item>Zone de texte</Nav.Item>
                </Card>
                <Card className='elements' onClick={() => handleClick({ elem: 'img' })}>
                    <Nav.Item>Image<input type='file' /></Nav.Item>
                </Card>
                <Card className='elements' onClick={() => handleClick({ elem: 'i' })}>
                    <Nav.Item>Icon</Nav.Item>
                </Card>
            </Nav>
        </aside>
    )
}

export default SidebarComponents;