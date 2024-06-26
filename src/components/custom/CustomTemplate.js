import { environment } from '../../environment/environment.developments.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid } from '@mui/material';
import { addComponent, updateComponentText, updateComponentParams, updateComponentValues, deleteComponent, saveTemplate } from './customUtils.js';
import ToolbarComponents from './ToolbarComponents.js';
import SidebarComponents from './SidebarComponents.js';
import Preview from './Preview.js';
import { useAuth } from '../user/Context/AuthContext.js';
import { useCustomNavigate } from '../../hooks/useCustomNavigate.js';
import Loader from "../loader/Loader.js";

// Page de modifiaction de template
function CustomTemplate() {
    const { user } = useAuth();
    const { navigateToTemplates, navigateToPortfolios } = useCustomNavigate();
    const [selectedElement, setSelectedElement] = useState(null);
    const { model, id } = useParams();
    const [documentType, setDocumentType] = useState(model);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [components, setComponents] = useState([]);
    const [templateData, setTemplateData] = useState({
        id: documentType === 'portfolios' || documentType === 'templates' ? id : null,
        owner_id: user.id,
        is_public: true
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(environment.apiURL + `/controllers/${model}/get?id=${id}`)
            .then(response => response.json())
            .then(data => {
                const {name: portfolioName} = data;
                setName(portfolioName);
                const {description: portfolioDescription} = data;
                setDescription(portfolioDescription);
                const { components: componentsData } = data;
                setComponents(componentsData);
                setLoading(false)
            })
            .catch(error => {
                console.error('Error fetching templates:', error)
                setLoading(false)
            });
    }, [id, model]);

    useEffect(() => {
        setTemplateData(prevState => ({
            ...prevState,
            name: name,
            description: description,
            components: components
        }));
    }, [components]);

    const saveTemplateHandler = () => {
        setTemplateData(prevState => ({
            ...prevState,
            components: components
        }));
        if(documentType === 'portfolios' || documentType === 'templates') {
            saveTemplate(documentType, templateData, navigateToTemplates, navigateToPortfolios);
        } else {
            saveTemplate(null, templateData, navigateToTemplates, navigateToPortfolios);
        }
        console.log(documentType);
    }

    return (
        <>
            <ToolbarComponents selectedElement={selectedElement} modelData={templateData} setModelData={setTemplateData} 
                updateComponentParams={(id, attribut, value) => updateComponentParams(id, attribut, value, components, setComponents)} 
                updateComponentValues={(id, attribut, value) => updateComponentValues(id, attribut, value, components, setComponents)}
                deleteComponent={(component) => deleteComponent(component, components, setComponents, setSelectedElement)}
                saveTemplateHandler={saveTemplateHandler} documentType={documentType} setDocumentType={setDocumentType} />
            <Grid container alignItems="stretch">
                <Grid item xs={2}>
                    <SidebarComponents addComponent={(newComponent) => addComponent(newComponent, setComponents)} modelData={templateData} setModelData={setTemplateData} />
                </Grid>
                <Grid item xs={10} style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    {loading ? (
                        <Loader />
                    ) : (
                        <Preview className="md-10" components={components} setSelectedElement={setSelectedElement} 
                        updateComponentText={(id, value) => updateComponentText(id, value, components, setComponents)} />
                    )}
                </Grid>
            </Grid>
        </>
    );
}

export default CustomTemplate;