import './Custom.scss';
import { useState } from 'react';
import SidebarComponents from './SidebarComponents.js';
import ToolbarComponents from './ToolbarComponents.js';
import Preview from './Preview.js';
import { Grid } from '@mui/material';

function Custom() {
    const [model, setModel] = useState({
        name: 'Portfolio',
        description: 'Description par défaut',
        owner_id: null,
        components: []
    });
    const [selectedElement, setSelectedElement] = useState(null);

    const addComponent = (component) => {
        const newComponent = {
            ...component,
            values: {
                ...component.values
            }
        };
        setModel(prevModel => ({
            ...prevModel,
            components: [...prevModel.components, newComponent]
        }));
        console.log('Portfolio:')
        console.log(model)
    };

    const updateTemplateData = (newData) => {
        console.log('Step 4 (params to update portfolio data)')
        console.log(newData)
        setModel(prevTemplateData => ({
            ...prevTemplateData,
            components: newData.components
        }));

        console.log(model)
    };

    const [componentProps, setComponentProps] = useState({});

    return (
        <Grid container alignItems="stretch" className='custom'>
            <Grid item xs={2}>
                <SidebarComponents addComponent={addComponent} />
            </Grid>
            <Grid item xs={10}>
                <ToolbarComponents selectedElement={selectedElement} componentProps={componentProps} setComponentProps={setComponentProps} />
                <Preview model={model} setSelectedElement={setSelectedElement} componentProps={componentProps} updateTemplateData={updateTemplateData} />
            </Grid>
        </Grid>
    );
}

export default Custom;