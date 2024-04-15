import { useState, useEffect } from 'react';
import { Card, Nav } from 'react-bootstrap';
import './Sidebar.scss';

function SidebarComponents({ addComponent }) {
    const [initialized, setInitialized] = useState(false);
    const defaultComponent = {
        value_type: null,
        information_type: 7,
        position_x: 1,
        position_y: 2,
        z_index: 1,
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
                <Card className='elements' onClick={() => handleClick({ value_type: 5, z_index: 0,
                    values:{ color: '#ffffff', border: 1, borderColor: '#000000', borderRadius: 0 } })}>
                    <Nav.Item>Forme</Nav.Item>
                </Card>
                <Card className='elements' onClick={() => handleClick({ value_type: 1, information_type: 2, position_x: 15, position_y: 1, 
                    values:{texte: 'Titre', police: 'Open Sans', textSize: 24, color: '#000000', alignment: 'center', weight: false, style: false, decoration: false}})}>
                    <Nav.Item>Titre</Nav.Item>
                </Card>
                <Card className='elements' onClick={() => handleClick({ value_type: 1, information_type: 3, width: 25, height: 20,
                    values:{texte: 'Zone de texte', police: 'Open Sans', textSize: 14, color: '#000000', alignment: 'left', weight: false, style: false, decoration: false} })}>
                    <Nav.Item>Zone de texte</Nav.Item>
                </Card>
                <Card className='elements' onClick={() => handleClick({ value_type: 2, position_x: 0, position_y: 0, width: 'auto !important', height: 25, 
                    values:{link: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficon-library.com%2Fimages%2Fpicture-icon-png%2Fpicture-icon-png-4.jpg&f=1&nofb=1&ipt=ec3caf8102b1202b59fcb92b34b9de6c1105390a7b24b177c720b1b4e5b947b0&ipo=images", border: 0, borderColor: '#000000', borderRadius: 0} })}>
                    <Nav.Item>Image</Nav.Item>
                </Card>
                <Card className='elements' onClick={() => handleClick({ value_type: 3,  position_x: 10, position_y: 2,
                    values: {texte: 'Bouton', link: '', police: 'Open Sans', textSize: 16, color: '#ffffff', weight: false, style: false, decoration: false, 
                        border: 0, borderColor: '#000000', borderRadius: 10, backgroundColor: '#4678c6'}})}>
                    <Nav.Item>Bouton / Lien</Nav.Item>
                </Card>
            </Nav>
        </aside>
    )
}

export default SidebarComponents;