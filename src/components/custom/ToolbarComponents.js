import DefaultToolbar from './toolbars/DefaultToolbar';
import ElemToolbar from './toolbars/ElemToolbar';
import TitleToolbar from './toolbars/TitleToolbar';
import TextToolbar from './toolbars/TextToolbar';
import ImageToolbar from './toolbars/ImageToolbar';
import IconToolbar from './toolbars/IconToolbar';
import './Toolbar.scss';
import { AppBar } from '@mui/material';


function ToolbarComponents({ selectedElement, 
	shapeProps, setShapeProps, 
	titleProps, setTitleProps,
	textProps, setTextProps, 
	imageProps, setImageProps,
	iconProps, setIconProps }) {

	return (
		<AppBar className="toolbar">
			{selectedElement ? (
				<>
					{selectedElement.tagName.toLowerCase() === 'div' && <ElemToolbar shapeProps={shapeProps} setShapeProps={setShapeProps} element={selectedElement} />}
					{selectedElement.tagName.toLowerCase() === 'h1' && <TitleToolbar titleProps={titleProps} setTitleProps={setTitleProps} element={selectedElement} />}
					{selectedElement.tagName.toLowerCase() === 'span' && <TextToolbar textProps={textProps} setTextProps={setTextProps} element={selectedElement} />}
					{selectedElement.tagName.toLowerCase() === 'img' && <ImageToolbar imageProps={imageProps} setImageProps={setImageProps} element={selectedElement} />}
					{selectedElement.tagName.toLowerCase() === 'i' && <IconToolbar iconProps={iconProps} setIconProps={setIconProps} element={selectedElement} />}
				</>
			) : (
				<DefaultToolbar />
			)}
		</AppBar>
	);
}

export default ToolbarComponents;