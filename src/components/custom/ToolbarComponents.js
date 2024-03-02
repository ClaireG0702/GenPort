import ElemToolbar from './toolbars/ElemToolbar';
import TextToolbar from './toolbars/TextToolbar';
import IconToolbar from './toolbars/IconToolbar';
import './Toolbar.scss';
import { AppBar } from '@mui/material';

function ToolbarComponents({ selectedElement }) {
	return (
		<AppBar className="toolbar">
			{selectedElement && (
				<>
					{selectedElement.elem === 'div' && <ElemToolbar />}
					{selectedElement.elem === 'h1' && <TextToolbar />}
					{selectedElement.elem === 'span' && <TextToolbar />}
					{selectedElement.elem === 'img' && <ElemToolbar />}
					{selectedElement.elem === 'i' && <IconToolbar />}
				</>
			)}
		</AppBar>
	);
}

export default ToolbarComponents;