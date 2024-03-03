import DefaultToolbar from './toolbars/DefaultToolbar';
import ElemToolbar from './toolbars/ElemToolbar';
import TextToolbar from './toolbars/TextToolbar';
import IconToolbar from './toolbars/IconToolbar';
import './Toolbar.scss';
import { AppBar } from '@mui/material';


function ToolbarComponents({ selectedElement, shapeProps, setShapeProps }) {
	return (
		<AppBar className="toolbar">
			{selectedElement ? (
				<>
					{selectedElement.tagName.toLowerCase() === 'div' && <ElemToolbar shapeProps={shapeProps} setShapeProps={setShapeProps} element={selectedElement} />}
					{selectedElement.tagName.toLowerCase() === 'h1' && <TextToolbar />}
					{selectedElement.tagName.toLowerCase() === 'span' && <TextToolbar />}
					{selectedElement.tagName.toLowerCase() === 'img' && <ElemToolbar />}
					{selectedElement.tagName.toLowerCase() === 'i' && <IconToolbar />}
				</>
			) : (
				<DefaultToolbar />
			)}
		</AppBar>
	);
}

export default ToolbarComponents;