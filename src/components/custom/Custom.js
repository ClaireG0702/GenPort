import './Custom.scss';
import { useState } from 'react';
import SidebarComponents from './SidebarComponents.js';
import ToolsbarComponents from './ToolsbarComponents.js';
import Preview from './Preview.js';

function Custom() {
    const [customComponent, setCustomComponent] = useState([]);

    const addComponent = (component) => {
        setCustomComponent([...customComponent, component]);
    }

    return (
        <div className='custom'>
            <SidebarComponents addComponent={addComponent} />
            <ToolsbarComponents />
            <Preview customComponent={customComponent} />
        </div>
    );
}

export default Custom;