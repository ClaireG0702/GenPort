import './Custom.scss';
import { useState } from 'react';
import SidebarComponents from './SidebarComponents.js';
import ToolbarComponents from './ToolbarComponents.js';
import Preview from './Preview.js';
import { Grid } from '@mui/material';

function Custom() {
    const [customComponent, setCustomComponent] = useState([]);
    const [selectedElement, setSelectedElement] = useState(null);

    const addComponent = (component) => {
        const newId = customComponent.length;
        setCustomComponent([...customComponent, { ...component, id: newId }]);
        setShapeProps(prevState => ({
            ...prevState,
            [newId]: {
                width: 100,
                height: 50,
                top: 0,
                left: 0,
                color: '#000000',
                border: 0,
                borderColor: '#000000'
            }
        }));
    };

    const [shapeProps, setShapeProps] = useState({});

    return (
        <Grid container alignItems="stretch" className='custom'>
            <Grid item xs={2}>
                <SidebarComponents addComponent={addComponent} setSelectedElement={setSelectedElement} />
            </Grid>
            <Grid item xs={10}>
                <ToolbarComponents selectedElement={selectedElement} shapeProps={shapeProps} setShapeProps={setShapeProps} />
                <Preview customComponent={customComponent} setSelectedElement={setSelectedElement}
                    shapeProps={shapeProps} setShapeProps={setShapeProps} />
            </Grid>
        </Grid>
    );
}

export default Custom;