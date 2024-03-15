import { AppBar } from '@mui/material';
import DefaultToolbar from './toolbars/DefaultToolbar';
import ElemToolbar from './toolbars/ElemToolbar';
import TitleToolbar from './toolbars/TitleToolbar';
import TextToolbar from './toolbars/TextToolbar';
import ImageToolbar from './toolbars/ImageToolbar';
import IconToolbar from './toolbars/IconToolbar';
import './Toolbar.scss';

// Affichage de la barre d'outil correspondant à l'élément sélectionné
function ToolbarComponents({ selectedElement, updateComponentParams, updateComponentValues, deleteComponent, modelData, setModelData, saveTemplateHandler }) {

	return (
		<AppBar className="toolbar">
			{selectedElement ? (
				<>
					{selectedElement.value_type === 1 && <TextToolbar element={selectedElement} updateComponentParams={updateComponentParams} updateComponentValues={updateComponentValues} deleteComponent={deleteComponent} />}
					{selectedElement.value_type === 2 && <ImageToolbar  element={selectedElement} />}
					{selectedElement.value_type === 5 && <ElemToolbar  element={selectedElement} updateComponentParams={updateComponentParams} updateComponentValues={updateComponentValues} />}
				</>
			) : (
				<DefaultToolbar modelData={modelData} setModelData={setModelData} saveTemplateHandler={saveTemplateHandler} />
			)}
		</AppBar>
	);
}

export default ToolbarComponents;