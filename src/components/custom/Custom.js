import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import { addComponent, updateComponentText, updateComponentParams, updateComponentValues, deleteComponent, saveTemplate } from './customUtils.js';
import SidebarComponents from './SidebarComponents.js';
import ToolbarComponents from './ToolbarComponents.js';
import Preview from './Preview.js';
import './Custom.scss';

// Page de création de template
function Custom() {
    const [selectedElement, setSelectedElement] = useState(null);
    const [components, setComponents] = useState([]);
    const [modelData, setModelData] = useState({
        id: null,
        name: 'Portfolio',
        description: 'Description par défaut',
        owner_id: null
    });

    useEffect(() => {
        setModelData(prevState => ({
            ...prevState,
            components: components
        }));
    }, [components])

    const saveTemplateHandler = () => {
        setModelData(prevState => ({
            ...prevState,
            components: components
        }));
        saveTemplate(modelData);
    }

    return (
        <>
            <ToolbarComponents selectedElement={selectedElement} modelData={modelData} setModelData={setModelData}
                updateComponentParams={(id, attribut, value) => updateComponentParams(id, attribut, value, components, setComponents)}
                updateComponentValues={(id, attribut, value) => updateComponentValues(id, attribut, value, components, setComponents)}
                deleteComponent={(component) => deleteComponent(component, components, setComponents, setSelectedElement)}
                saveTemplateHandler={saveTemplateHandler} />
            <Grid container alignItems="stretch" className='custom'>
                <Grid item xs={2}>
                    <SidebarComponents addComponent={(newComponent) => addComponent(newComponent, setComponents)} />
                </Grid>
                <Grid item xs={10}>
                    <Preview components={components} setSelectedElement={setSelectedElement}
                        updateComponentText={(id, value) => updateComponentText(id, value, components, setComponents)} />
                </Grid>
            </Grid>
        </>
    );
}

export default Custom;