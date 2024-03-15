import { environment } from '../../environment/environment.developments.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid } from '@mui/material';
import DefaultToolbar from './toolbars/DefaultToolbar.js';
import PreviewTemplate from './PreviewTemplate.js';
import './Custom.scss';

// Page de modifiaction de template
function CustomTemplate() {
    const [initialized, setInitialized] = useState(false);
    const [selectedElement, setSelectedElement] = useState(null);
    const { id } = useParams();
    const [components, setComponents] = useState([]);
    const [templateData, setTemplateData] = useState({
        id: null,
        name: 'Portfolio',
        description: 'Ceci est la description par defaut',
        owner_id: null
    });

    useEffect(() => {
        fetch(environment.apiURL + `/controllers/templates/get?id=${id}`)
            .then(response => response.json())
            .then(data => {
                const { components: componentsData } = data;
                setComponents(componentsData);
            })
            .catch(error => console.error('Error fetching templates:', error));
    }, [id]);

    const updateComponentText = (id, value) => {
        const updatedComponents = [...components];
        updatedComponents[id].values.texte = value;
        setComponents(updatedComponents);
    }

    const saveTemplate = async () => {
        try {
            const response = await fetch(environment.apiURL + '/controllers/portfolios/save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(templateData),
            });

            if (!response.ok) {
                throw new Error('Failed to save portfolio');
            }

            const responseData = await response.json();
            return responseData;
        } catch (error) {
            console.error('Error saving portfolio:', error.message);
            throw error;
        }
    };

    const saveTemplateHandler = () => {
        setTemplateData(prevState => ({
            ...prevState,
            components: components
        }));
    }

    useEffect(() => {
        initialized && saveTemplate();
    }, [templateData.components]);

    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <DefaultToolbar modelData={templateData} setModelData={setTemplateData} saveTemplateHandler={saveTemplateHandler} />
                </Grid>
            </Grid>
            <Grid container alignItems="stretch" className='custom'>
                <Grid item xs={10} style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <PreviewTemplate className="md-10" components={components} updateComponentText={updateComponentText} setSelectedElement={setSelectedElement} />
                </Grid>
            </Grid>
        </>
    );
}

export default CustomTemplate;