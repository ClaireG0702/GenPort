import { environment } from '../../environment/environment.developments.js';

let idComponent = 0;

export function addComponent(newComponent, setComponents) {
	newComponent = {...newComponent, component_id:idComponent};
	setComponents(prevState => [...prevState, newComponent]);

	idComponent += 1;
}

export function updateComponentText(id, value, components, setComponents) {
	const updatedComponents = [...components];
	updatedComponents[id].values.texte = value;
	setComponents(updatedComponents);
}

export function updateComponentParams(id, attribut, value, components, setComponents) {
	const updatedComponents = [...components];
	updatedComponents[id][attribut] = value;
	setComponents(updatedComponents);
}

export function updateComponentValues(id, attribut, value, components, setComponents) {
	const updatedComponents = [...components];
	updatedComponents[id].values[attribut] = value;
	setComponents(updatedComponents);
}

export function deleteComponent(component, components, setComponents, setSelectedElement) {
	const updatedComponents = components.filter((_, index) => index !== component.id);
	setComponents(updatedComponents);
	setSelectedElement(null);
}

export async function saveTemplate(model, modelData, navigateToTemplates, navigateToPortfolios) {
	if(model != null) {
		try {
			const response = await fetch(environment.apiURL + `/controllers/${model}/save`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(modelData),
			});
	
			if (!response.ok) {
				throw new Error(`Failed to save ${model}`);
			}
	
			if(model === 'templates') {
				alert('Le template a bien été sauvegardé');
				navigateToTemplates();
			} else {
				alert('Le portfolio a bien été sauvegardé');
				navigateToPortfolios();
			}
			const responseData = await response.json();
			return responseData;
		} catch (error) {
			console.error(`Error saving ${model}:`, error.message);
			throw error;
		}
	} else {
		try {
			const response = await fetch(environment.apiURL + `/controllers/portfolios/save`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(modelData),
			});
	
			if (!response.ok) {
				throw new Error(`Failed to save portfolio`);
			}
			
			alert('Le portfolio a bien été sauvegardé');
			navigateToPortfolios();
			
			const responseData = await response.json();
			return responseData;
		} catch (error) {
			console.error(`Error saving portfolio:`, error.message);
			throw error;
		}
	}
}
