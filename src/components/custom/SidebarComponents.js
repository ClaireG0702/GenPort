import { Card, Nav } from 'react-bootstrap';
import { componentsList } from '../../data/ComponentsList.js';
import './Sidebar.scss';

function SidebarComponents({addComponent}) {
    const handleClick = (component) => {
        addComponent(component);
    }

    return (
        <aside >
            <Nav>
                {componentsList.map(({id, name, elem}) =>
                <Card key={id} className='elements' onClick={() => handleClick({elem})}>
                    <Nav.Item>{name}</Nav.Item>
                </Card>
                )}
            </Nav>
        </aside>
    )
}

export default SidebarComponents;