import { Card } from "react-bootstrap";
import './Preview.scss';
import Shape from "./elements/Shape";
import Title from "./elements/Title";
import TextZone from "./elements/TextZone";
import Image from "./elements/Image";
import Icon from "./elements/Icon";
import { useState } from "react"; 

function Preview({ model, setSelectedElement, componentProps, updateTemplateData }) {
	const [updatedComponents, setUpdatedComponents] = useState([]);

	const handleClick = (id) => {
		setSelectedElement(document.getElementById(id));
		// TODO
	}

	const handleComponentChange = (id, updatedComponent) => {
		console.log('Step 1 (updated component)')
		console.log(updatedComponent)

		let newComponents = [];

		setUpdatedComponents(prevComponents => {
			newComponents = [...prevComponents];
			newComponents[id] = updatedComponent;
			console.log('Step 2 (list updated of components)')
			console.log(newComponents)
			return newComponents;
		});

		console.log('Step 3 (list pass to update portfolio data)')
		console.log(updatedComponents);
        
        updateTemplateData({ components: newComponents });
    };

	return (
		<div className="custom-preview">
			<Card className="preview">
				<Card.Body>
					{model.components.map((component, index) => {
						switch (component.value_type) {
							case 1:
								if (component.information_type === 2) {
									return <Title key={index} id={index} component={component}  
									onChange={handleComponentChange} textValue={component.values.texte}  />
								} else {
									return <TextZone key={index} id={index} component={component} 
									onChange={handleComponentChange} textValue={component.values.texte}  />
								}
							case 2:
								return <Image key={index} id={index} component={component} />
							default:
								return null;
						}
					})}
				</Card.Body>
			</Card>
		</div>
	);
}

export default Preview;