import { Card } from "react-bootstrap";
import InputElem from "./elements/InputElem";
import './Preview.scss';

// Pré-visualisation du modèle (template ou protfolio) pour la création
function Preview({ components, updateComponentText, setSelectedElement }) {

	const handleClick = (component) => {
		// TODO
		setSelectedElement(component);
		console.log(component)
	}

	return (
		<div className="custom-preview">
			<Card className="preview">
				<Card.Body>
				{components.map((component, index) => {
						let type;
						switch (component.value_type) {
							case 1:
								type = 'text';
								break;
							case 2:
								type = 'file';
								break;
							default:
								type = 'text';
								break;
						}
						return <InputElem key={index} id={index} type={type} component={component} updateComponentText={updateComponentText} onClick={handleClick(component)} />
					})}
				</Card.Body>
			</Card>
		</div>
	);
}

export default Preview;