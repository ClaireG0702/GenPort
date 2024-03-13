import './Custom.scss';
import { useState, useEffect } from 'react';
import PreviewTemplate from './PreviewTemplate.js';
import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import DefaultToolbar from './toolbars/DefaultToolbar.js';
import { environment } from '../../environment/environment.developments.js';

// Page de modifiaction de template
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
        fetch(environment.apiURL + `/controllers/templates/get?id=${id}`)
            .then(response => response.json())
            .then(data => {
                const { components: componentsData } = data;
                setComponents(componentsData);
            })
            .catch(error => console.error('Error fetching templates:', error));
    }, [id]);

    const updateTemplateData = () => {
        console.log('components')
        console.log(components)
        // components.map((component) => {
        //     setComponents(prevState => ({
        //         ...prevState,
        //         values: {
        //             ...component.values,
        //             texte: component.values.texte
        //         }
        //     }))
        // })
    }

    const saveTemplate = async () => {
        // try {
        // 	const response = await fetch(environment.apiURL+'/controllers/portfolios/save', {
        // 		method: 'POST',
        // 		headers: {
        // 			'Content-Type': 'application/json', 
        // 		},
        // 		body: JSON.stringify(templateData),
        // 	});

        // 	if (!response.ok) {
        // 		throw new Error('Failed to save portfolio');
        // 	}

        // 	const responseData = await response.json();
        // 	return responseData;
        // } catch (error) {
        // 	console.error('Error saving portfolio:', error.message);
        // 	throw error;
        // }
        console.log(templateData);
    };

    // const saveTemplateHandler = async () => {
    // 	try {
    //         const updatedComponents = components.map((component, index) => {
    //             console.log(component.values.texte)
    //             return {
    //                 ...component,
    //                 values: {
    //                     ...component.values,
    //                     texte: component.values.texte 
    //                 }
    //             };
    //         });

    //         setTemplateData(prevState => ({
    //             ...prevState,
    //             components: updatedComponents
    //         }));

    // 		const savedTemplate = await saveTemplate();
    // 		console.log('Saved portfolio:', savedTemplate);
    // 	} catch (error) {
    // 		console.error('Error saving portfolio:', error);
    // 	}
    // };

    const saveTemplateHandler = (updatedComponents) => {
        updateTemplateData();
        setTemplateData(prevState => ({
            ...prevState,
            name: updatedComponents.name,
            // components: templateData
        }));

        saveTemplate()
    }

    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <DefaultToolbar templateData={templateData} saveTemplateHandler={saveTemplateHandler} />
                </Grid>
            </Grid>
            <Grid container alignItems="stretch" className='custom'>
                <Grid item xs={10} style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <PreviewTemplate className="md-10" components={components} updateTemplateData={updateTemplateData} />
                </Grid>
            </Grid>
        </>
    );
}

export default CustomTemplate;