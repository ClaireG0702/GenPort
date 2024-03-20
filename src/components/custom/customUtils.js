import { environment } from '../../environment/environment.developments.js';

export function addComponent(newComponent, setComponents) {
	setComponents(prevState => [...prevState, newComponent]);
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

export function saveTemplate(modelData) {
	// try {
	//     const response = await fetch(environment.apiURL + '/controllers/portfolios/save', {
	//         method: 'POST',
	//         headers: {
	//             'Content-Type': 'application/json',
	//         },
	//         body: JSON.stringify(modelData),
	//     });

	//     if (!response.ok) {
	//         throw new Error('Failed to save portfolio');
	//     }

	//		alert('Le portfolio a bien été sauvegardé');
	//     const responseData = await response.json();
	//     return responseData;
	// } catch (error) {
	//     console.error('Error saving portfolio:', error.message);
	//     throw error;
	// }
	console.log(modelData);
	console.log(JSON.stringify(modelData))
}
