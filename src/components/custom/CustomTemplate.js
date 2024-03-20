import { environment } from '../../environment/environment.developments.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid } from '@mui/material';
import { addComponent, updateComponentText, updateComponentParams, updateComponentValues, deleteComponent, saveTemplate } from './customUtils.js';
import ToolbarComponents from './ToolbarComponents.js';
import SidebarComponents from './SidebarComponents.js';
import Preview from './Preview.js';
import './Custom.scss';

// Page de modifiaction de template
function CustomTemplate() {
    const [selectedElement, setSelectedElement] = useState(null);
    const { model, id } = useParams();
    const [name, setName] = useState('');
    const [components, setComponents] = useState([]);
    const [templateData, setTemplateData] = useState({
        id: null,
        description: 'Ceci est la description par defaut',
        owner_id: null
    });

    useEffect(() => {
        fetch(environment.apiURL + `/controllers/${model}/get?id=${id}`)
            .then(response => response.json())
            .then(data => {
                const {name: portfolioName} = data;
                setName(portfolioName);
                const { components: componentsData } = data;
                setComponents(componentsData);
            })
            .catch(error => console.error('Error fetching templates:', error));
    }, [id, model]);

    useEffect(() => {
        setTemplateData(prevState => ({
            ...prevState,
            name: name,
            components: components
        }));
    }, [components]);

    const saveTemplateHandler = () => {
        setTemplateData(prevState => ({
            ...prevState,
            components: components
        }));
        saveTemplate(templateData);
    }

    return (
        <>
            <ToolbarComponents selectedElement={selectedElement} modelData={templateData} setModelData={setTemplateData} 
                updateComponentParams={(id, attribut, value) => updateComponentParams(id, attribut, value, components, setComponents)} 
                updateComponentValues={(id, attribut, value) => updateComponentValues(id, attribut, value, components, setComponents)}
                deleteComponent={(component) => deleteComponent(component, components, setComponents, setSelectedElement)}
                saveTemplateHandler={saveTemplateHandler} />
            <Grid container alignItems="stretch" className='custom'>
                <Grid item xs={2}>
                    <SidebarComponents addComponent={(newComponent) => addComponent(newComponent, setComponents)} />
                </Grid>
                <Grid item xs={10} style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <Preview className="md-10" components={components} setSelectedElement={setSelectedElement} 
                        updateComponentText={(id, value) => updateComponentText(id, value, components, setComponents)} />
                </Grid>
            </Grid>
        </>
    );
}

export default CustomTemplate;