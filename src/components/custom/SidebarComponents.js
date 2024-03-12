import { Card, Nav } from 'react-bootstrap';
import './Sidebar.scss';

function SidebarComponents({ addComponent }) {
    const handleClick = (component) => {
        addComponent(component);
    }

    return (
        <aside className='sidebar'>
            <Nav>
                <Card className='elements' onClick={() => handleClick({ value_type: 5 })}>
                    <Nav.Item>Forme</Nav.Item>
                </Card>
                <Card className='elements' onClick={() => handleClick({ value_type: 1, information_type: 2, values:{texte: 'Titre'}})}>
                    <Nav.Item>Titre</Nav.Item>
                </Card>
                <Card className='elements' onClick={() => handleClick({ value_type: 1, information_type: null, values:{texte: 'Zone de texte'} })}>
                    <Nav.Item>Zone de texte</Nav.Item>
                </Card>
                <Card className='elements' onClick={() => handleClick({ value_type: 2 })}>
                    <Nav.Item>Image<input className='input-file' type='file' /></Nav.Item>
                </Card>
                <Card className='elements' onClick={() => handleClick({ value_type: 1 })}>
                    <Nav.Item>Icon</Nav.Item>
                </Card>
            </Nav>
        </aside>
    )
}

export default SidebarComponents;