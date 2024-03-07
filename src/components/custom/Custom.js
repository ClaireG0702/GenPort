import './Custom.scss';
import { useState } from 'react';
import SidebarComponents from './SidebarComponents.js';
import ToolbarComponents from './ToolbarComponents.js';
import Preview from './Preview.js';
import { Grid } from '@mui/material';

function Custom() {
    const [customComponent, setCustomComponent] = useState([]);
    const [selectedElement, setSelectedElement] = useState(null);

    const addComponent = (component) => {
        const newId = customComponent.length;
        setCustomComponent([...customComponent, { ...component, id: newId }]);
        setShapeProps(prevState => ({
            ...prevState,
            [newId]: {
                position_y: 0,
                position_x: 0,
                width: 100,
                height: 50,
                color: '#000000',
                border: 0,
                borderColor: '#000000',
                borderRadius: 0
            }
        }));
        setTitleProps(prevState => ({
            ...prevState,
            [newId]: {
                position_y: 0,
                position_x: 0,
                width: 300,
                height: 50,
                alignment: 'center',
                style: false,
                weight: false,
                decoration: false,
                police: '',
                textSize: 32,
                color: '#000000',
                textValue: 'Titre'
            }
        }));
        setTextProps(prevState => ({
            ...prevState,
            [newId]: {
                position_y: 0,
                position_x: 0,
                width: 400,
                height: 50,
                alignment: 'center',
                style: false,
                weight: false,
                decoration: false,
                police: '',
                textSize: 16,
                color: '#000000',
                textValue: 'Zone de texte'
            }
        }));
        setImageProps(prevState => ({
            ...prevState,
            [newId]: {
                position_y: 0,
                position_x: 0,
                width: 200,
                height: 200,
                border: 0,
                borderColor: '#000000',
                borderRadius: 0
            }
        }));
        setIconProps(prevState => ({
            ...prevState,
            [newId]: {
                position_y: 0,
                position_x: 0,
                width: 50,
                height: 50,
                color: '#000000'
            }
        }));
    };

    const [shapeProps, setShapeProps] = useState({});
    const [titleProps, setTitleProps] = useState({});
    const [textProps, setTextProps] = useState({});
    const [imageProps, setImageProps] = useState({});
    const [iconProps, setIconProps] = useState({});

    return (
        <Grid container alignItems="stretch" className='custom'>
            <Grid item xs={2}>
                <SidebarComponents addComponent={addComponent} />
            </Grid>
            <Grid item xs={10}>
                <ToolbarComponents selectedElement={selectedElement} shapeProps={shapeProps} 
                    setShapeProps={setShapeProps} titleProps={titleProps} setTitleProps={setTitleProps}
                    textProps={textProps} setTextProps={setTextProps} imageProps={imageProps} 
                    setImageProps={setImageProps} iconProps={iconProps} setIconProps={setIconProps} />
                <Preview customComponent={customComponent} setSelectedElement={setSelectedElement}
                    shapeProps={shapeProps} titleProps={titleProps} textProps={textProps}
                    imageProps={imageProps} iconProps={iconProps} />
            </Grid>
        </Grid>
    );
}

export default Custom;