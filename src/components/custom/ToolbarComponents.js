import DefaultToolbar from './toolbars/DefaultToolbar';
import ElemToolbar from './toolbars/ElemToolbar';
import TextToolbar from './toolbars/TextToolbar';
import IconToolbar from './toolbars/IconToolbar';
import './Toolbar.scss';
import { AppBar } from '@mui/material';
import { useState } from 'react';

function ToolbarComponents({ selectedElement, shapeProps, setShapeProps }) {

	return (
		<AppBar className="toolbar">
			{selectedElement ? (
				<>
					{selectedElement.elem === 'div' && <ElemToolbar shapeProps={shapeProps} setShapeProps={setShapeProps} />}
					{selectedElement.elem === 'h1' && <TextToolbar />}
					{selectedElement.elem === 'span' && <TextToolbar />}
					{selectedElement.elem === 'img' && <ElemToolbar />}
					{selectedElement.elem === 'i' && <IconToolbar />}
				</>
			) : (
				<DefaultToolbar />
			)}
		</AppBar>
	);
}

export default ToolbarComponents;