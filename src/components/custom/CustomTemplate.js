import './Custom.scss';
import { useState, useEffect } from 'react';
import PreviewTemplate from './PreviewTemplate.js';
import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import jsonTemplate from '../../data/template1.json';
import DefaultToolbar from './toolbars/DefaultToolbar.js';
import { environment } from '../../environment/environment.developments.js';

function CustomTemplate() {
    const { id } = useParams();
    const [components, setComponents] = useState([]);
    const [templateData, setTemplateData] = useState({
        id: parseInt(id)+1,
        name: 'Portfolio',
        description: 'Ceci est la description par defaut',
        owner_id: null
    });

    useEffect(() => {
        if(jsonTemplate.id === parseInt(id)) {
            setComponents(jsonTemplate.components);
        }
    }, [id]);

    const updateTemplateData = (newData) => {
        console.log(newData)
        setTemplateData(prevTemplateData => ({
            ...prevTemplateData,
            components: newData.components
        }));
        console.log(templateData)
    };
    
    const saveTemplate = async () => {
		try {
			const response = await fetch(environment.apiURL+'/controllers/portfolios/save', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json', 
				},
				body: JSON.stringify(templateData),
			});

			if (!response.ok) {
				throw new Error('Failed to save template');
			}

			const responseData = await response.json();
			return responseData;
		} catch (error) {
			console.error('Error saving template:', error.message);
			throw error;
		}
	};

	const saveTemplateHandler = async () => {
		try {
			const savedTemplate = await saveTemplate(templateData);
			console.log('Saved template:', savedTemplate);
		} catch (error) {
			console.error('Error saving template:', error);
		}
	};

    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <DefaultToolbar components={components} templateData={templateData}  saveTemplateHandler={saveTemplateHandler} />
                </Grid>
            </Grid>
            <Grid container alignItems="stretch" className='custom'>
                <Grid item xs={10} style={{marginLeft:'auto', marginRight:'auto'}}>
                    <PreviewTemplate className="md-10" components={components} updateTemplateData={updateTemplateData} />
                </Grid>
            </Grid>
        </>
    );
}

export default CustomTemplate;