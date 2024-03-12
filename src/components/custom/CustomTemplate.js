import './Custom.scss';
import { useState, useEffect } from 'react';
import PreviewTemplate from './PreviewTemplate.js';
import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import DefaultToolbar from './toolbars/DefaultToolbar.js';
import { environment } from '../../environment/environment.developments.js';

function CustomTemplate() {
    const { id } = useParams();
    const [components, setComponents] = useState([]);
    const [templateData, setTemplateData] = useState({
        id: null,
        name: 'Portfolio',
        description: 'Ceci est la description par defaut',
        owner_id: null
    });

    useEffect(() => {
        fetch(environment.apiURL+`/controllers/templates/get?id=${id}`)
            .then(response => response.json())
            .then(data => {
                const {components: componentsData} = data;
                setComponents(componentsData);
            })
            .catch(error => console.error('Error fetching templates:', error));
    }, [id]);

    const updateTemplateData = (newData) => {
        console.log(newData)
        setTemplateData(prevTemplateData => ({
            ...prevTemplateData,
            name: newData.name,
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
				throw new Error('Failed to save portfolio');
			}

			const responseData = await response.json();
			return responseData;
		} catch (error) {
			console.error('Error saving portfolio:', error.message);
			throw error;
		}
	};

	const saveTemplateHandler = async () => {
		try {
			const savedTemplate = await saveTemplate(templateData);
			console.log('Saved portfolio:', savedTemplate);
		} catch (error) {
			console.error('Error saving portfolio:', error);
		}
	};

    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <DefaultToolbar templateData={templateData}  saveTemplateHandler={saveTemplateHandler} />
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