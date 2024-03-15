import { environment } from '../../environment/environment.developments.js';
import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import SidebarComponents from './SidebarComponents.js';
import ToolbarComponents from './ToolbarComponents.js';
import Preview from './Preview.js';
import './Custom.scss';

// Page de création de template
function Custom() {
    const [initialized, setInitialized] = useState(false);
    const [selectedElement, setSelectedElement] = useState(null);
    const [components, setComponents] = useState([]);
    const [modelData, setModelData] = useState({
        name: 'Portfolio',
        description: 'Description par défaut',
        owner_id: null
    });

    const addComponent = (newComponent) => {
        setComponents(prevState => [...prevState, newComponent]);
    };

    useEffect(() => {
        if(initialized) {
            setModelData(prevState => ({
                ...prevState,
                components: components
            }));
            console.log('Portfolio:');
            console.log(modelData);
        } else {
            setInitialized(true);
        }
    }, [components])

    const updateComponentText = (id, value) => {
        const updatedComponents = [...components];
        updatedComponents[id].values.texte = value;
        setComponents(updatedComponents);
    }

    const updateComponentElement = (id, attribut, value) => {
        const updatedComponents = [...components];
        updatedComponents[id][attribut] = value;
        setComponents(updatedComponents);
    }

    const updateComponentElementValue = (id, attribut, value) => {
        const updatedComponents = [...components];
        updatedComponents[id].values[attribut] = value;
        setComponents(updatedComponents);
    }

    const deleteComponent = (component) => {
        const updatedComponents = components.filter((_, index) => index != component.id);
        setComponents(updatedComponents);
    }

    const saveTemplate = async () => {
        // try {
        //     const response = await fetch(environment.apiURL + '/controllers/portfolios/save', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(modelData),
        //     });

        //     if (!response.ok) {
        //         throw new Error('Failed to save portfolio');
        //     }

        //     const responseData = await response.json();
        //     return responseData;
        // } catch (error) {
        //     console.error('Error saving portfolio:', error.message);
        //     throw error;
        // }
        console.log(modelData);
    };

    const saveTemplateHandler = () => {
        setModelData(prevState => ({
            ...prevState,
            components: components
        }));
    }

    useEffect(() => {
        initialized && saveTemplate();
    }, [modelData.components]);

    return (
        <Grid container alignItems="stretch" className='custom'>
            <Grid item xs={2}>
                <SidebarComponents addComponent={addComponent} />
            </Grid>
            <Grid item xs={10}>
                <ToolbarComponents selectedElement={selectedElement} updateComponentElement={updateComponentElement} updateComponentElementValue={updateComponentElementValue}  
                    deleteComponent={deleteComponent} modelData={modelData} setModelData={setModelData} saveTemplateHandler={saveTemplateHandler} />
                <Preview components={components} updateComponentText={updateComponentText} setSelectedElement={setSelectedElement} />
            </Grid>
        </Grid>
    );
}

export default Custom;