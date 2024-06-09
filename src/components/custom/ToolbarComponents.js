import { AppBar } from '@mui/material';
import DefaultToolbar from './toolbars/DefaultToolbar';
import ElemToolbar from './toolbars/ElemToolbar';
import TextToolbar from './toolbars/TextToolbar';
import ImageToolbar from './toolbars/ImageToolbar';
import './Toolbar.scss';
import BoutonToolbar from './toolbars/BoutonToolbar';

// Affichage de la barre d'outil correspondant à l'élément sélectionné
function ToolbarComponents({ selectedElement, updateComponentParams, updateComponentValues, deleteComponent, modelData, setModelData, saveTemplateHandler, documentType, setDocumentType }) {

	return (
		<AppBar className="toolbar">
			{selectedElement ? (
				<>
					{selectedElement.value_type === 1 && <TextToolbar element={selectedElement} updateComponentParams={updateComponentParams} updateComponentValues={updateComponentValues} deleteComponent={deleteComponent} />}
					{selectedElement.value_type === 2 && <ImageToolbar  element={selectedElement} updateComponentParams={updateComponentParams} updateComponentValues={updateComponentValues} deleteComponent={deleteComponent} />}
					{selectedElement.value_type === 3 && <BoutonToolbar element={selectedElement} updateComponentParams={updateComponentParams} updateComponentValues={updateComponentValues} deleteComponent={deleteComponent} />}
					{selectedElement.value_type === 5 && <ElemToolbar  element={selectedElement} updateComponentParams={updateComponentParams} updateComponentValues={updateComponentValues} deleteComponent={deleteComponent} />}
				</>
			) : (
				<DefaultToolbar modelData={modelData} setModelData={setModelData} saveTemplateHandler={saveTemplateHandler} documentType={documentType} setDocumentType={setDocumentType} />
			)}
		</AppBar>
	);
}

export default ToolbarComponents;