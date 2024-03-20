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

export async function saveTemplate(modelData) {
	console.log(modelData);
	try {
		const response = await fetch(environment.apiURL + '/controllers/portfolios/save', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(modelData),
		});

		if (!response.ok) {
			throw new Error('Failed to save portfolio');
		}

		alert('Le portfolio a bien été sauvegardé');
		window.location.href = '/portfolios';
		const responseData = await response.json();
		return responseData;
	} catch (error) {
		console.error('Error saving portfolio:', error.message);
		throw error;
	}
}
