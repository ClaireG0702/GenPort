import { Card, Nav } from 'react-bootstrap';
import './Sidebar.scss';

function SidebarComponents({ addComponent, setSelectedElement }) {
    const handleClick = (component) => {
        addComponent(component);
        setSelectedElement(component);
    }

    return (
        <aside>
            <Nav>
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