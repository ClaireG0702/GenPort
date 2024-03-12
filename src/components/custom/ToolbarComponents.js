import DefaultToolbar from './toolbars/DefaultToolbar';
import ElemToolbar from './toolbars/ElemToolbar';
import TitleToolbar from './toolbars/TitleToolbar';
import TextToolbar from './toolbars/TextToolbar';
import ImageToolbar from './toolbars/ImageToolbar';
import IconToolbar from './toolbars/IconToolbar';
import './Toolbar.scss';
import { AppBar } from '@mui/material';


function ToolbarComponents({ selectedElement, componentProps, setComponentProps }) {

	return (
		<AppBar className="toolbar">
			{selectedElement ? (
				<>
					{selectedElement.tagName.toLowerCase() === 'div' && <ElemToolbar componentProps={componentProps} setComponentProps={setComponentProps} element={selectedElement} />}
					{selectedElement.tagName.toLowerCase() === 'h1' && <TitleToolbar componentProps={componentProps} setComponentProps={setComponentProps} element={selectedElement} />}
					{selectedElement.tagName.toLowerCase() === 'span' && <TextToolbar componentProps={componentProps} setComponentProps={setComponentProps} element={selectedElement} />}
					{selectedElement.tagName.toLowerCase() === 'img' && <ImageToolbar componentProps={componentProps} setComponentProps={setComponentProps} element={selectedElement} />}
					{selectedElement.tagName.toLowerCase() === 'i' && <IconToolbar componentProps={componentProps} setComponentProps={setComponentProps} element={selectedElement} />}
				</>
			) : (
				<DefaultToolbar />
			)}
		</AppBar>
	);
}

export default ToolbarComponents;