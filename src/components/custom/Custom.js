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
        setCustomComponent([...customComponent, component]);
    }

    return (
        <Grid container className='custom'>
            <Grid item xs={2}>
                <SidebarComponents addComponent={ addComponent } setSelectedElement={setSelectedElement}/>
            </Grid>
            <Grid item xs={10}>
                <ToolbarComponents selectedElement={selectedElement}/>
                <Preview customComponent={ customComponent } setSelectedElement={setSelectedElement}/>
            </Grid>
        </Grid>
    );
}

export default Custom;