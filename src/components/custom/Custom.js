import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCustomNavigate } from '../../hooks/useCustomNavigate.js';
import { useAuth } from '../user/Context/AuthContext';
import './Custom.scss';
import Preview from './Preview.js';
import SidebarComponents from './SidebarComponents.js';
import ToolbarComponents from './ToolbarComponents.js';
import { addComponent, deleteComponent, saveTemplate, updateComponentParams, updateComponentText, updateComponentValues } from './customUtils.js';

// Page de création de template
function Custom() {
    const { user } = useAuth();
    const { model } = useParams();
    const { navigateToTemplates, navigateToPortfolios } = useCustomNavigate();
    const [selectedElement, setSelectedElement] = useState(null);
    const [components, setComponents] = useState([]);
    const [modelData, setModelData] = useState({
        id: null,
        name: 'Portfolio',
        description: 'Description par défaut',
        owner_id: user.id
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
        saveTemplate(model, modelData, navigateToTemplates, navigateToPortfolios);
    }

    return (
        <div className='custom-view'>
            <ToolbarComponents selectedElement={selectedElement} modelData={modelData} setModelData={setModelData}
                updateComponentParams={(id, attribut, value) => updateComponentParams(id, attribut, value, components, setComponents)}
                updateComponentValues={(id, attribut, value) => updateComponentValues(id, attribut, value, components, setComponents)}
                deleteComponent={(component) => deleteComponent(component, components, setComponents, setSelectedElement)}
                saveTemplateHandler={saveTemplateHandler} />
            <Grid container >
                <Grid item xs={2}>
                    <SidebarComponents addComponent={(newComponent) => addComponent(newComponent, setComponents)} />
                </Grid>
                <Grid item xs={10}>
                    <Preview components={components} setSelectedElement={setSelectedElement}
                        updateComponentText={(id, value) => updateComponentText(id, value, components, setComponents)} />
                </Grid>
            </Grid>
        </div>
    );
}

export default Custom;