import './Custom.scss';
import { useState, useEffect } from 'react';
import PreviewTemplate from './PreviewTemplate.js';
import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import jsonTemplate from '../../data/template1.json';
import DefaultToolbar from './toolbars/DefaultToolbar.js';

function CustomTemplate() {
    const { id } = useParams();
    const [components, setComponents] = useState([]);

    useEffect(() => {
        if(jsonTemplate.id === parseInt(id)) {
            setComponents(jsonTemplate.components);
        }
    }, [id]);

    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <DefaultToolbar />
                </Grid>
            </Grid>
            <Grid container alignItems="stretch" className='custom'>
                <Grid item xs={10} style={{marginLeft:'auto', marginRight:'auto'}}>
                    <PreviewTemplate className="md-10" components={components} />
                </Grid>
            </Grid>
        </>
    );
}

export default CustomTemplate;