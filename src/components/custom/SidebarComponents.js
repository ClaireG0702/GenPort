import { useState, useEffect } from 'react';
import { Card, Nav } from 'react-bootstrap';
import './Sidebar.scss';

function SidebarComponents({ addComponent }) {
    const [initialized, setInitialized] = useState(false);
    const defaultComponent = {
        value_type: null,
        information_type: null,
        position_x: 1,
        position_y: 2,
        width: 20,
        height: 10,
        values: {}
    }
    const [newComponent, setNewComponent] = useState(defaultComponent);

    const handleClick = (newValues) => {
        setNewComponent({
            ...defaultComponent,
            ...newValues,
            values: {
                ...defaultComponent.values,
                ...newValues.values
            }
        });
    }

    useEffect(() => {
        if(initialized) {
            addComponent(newComponent);
        } else {
            setInitialized(true)
        }
    }, [newComponent])

    return (
        <aside className='sidebar'>
            <Nav>
                <Card className='elements' onClick={() => handleClick({ value_type: 5, zIndex: 2,
                    values:{ color: '#ffffff', border: 1, borderColor: '#000000', borderRadius: 0 } })}>
                    <Nav.Item>Forme</Nav.Item>
                </Card>
                <Card className='elements' onClick={() => handleClick({ value_type: 1, information_type: 2, position_x: 15, position_y: 1, 
                    values:{texte: 'Titre', police: 'Arial', textSize: 24, color: '#000000', alignment: 'center', weight: false, style: false, decoration: false}})}>
                    <Nav.Item>Titre</Nav.Item>
                </Card>
                <Card className='elements' onClick={() => handleClick({ value_type: 1, width: 25, height: 20,
                    values:{texte: 'Zone de texte', police: 'Arial', textSize: 14, color: '#000000', alignment: 'left', weight: false, style: false, decoration: false} })}>
                    <Nav.Item>Zone de texte</Nav.Item>
                </Card>
                <Card className='elements' onClick={() => handleClick({ value_type: 2, position_x: 0, position_y: 0, height: 40, 
                    values:{link: "", border: 0, borderColor: '#000000', borderRadius: 0} })}>
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