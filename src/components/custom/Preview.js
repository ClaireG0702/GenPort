import { Card } from "react-bootstrap";
import InputElem from "./elements/InputElem";
import './Preview.scss';

// Pré-visualisation du modèle (template ou protfolio) pour la création
function Preview({ components, updateComponentText, setSelectedElement }) {

	const handleClick = (index, component) => {
		const selectedComponent = {...component, id: index};
		setSelectedElement(selectedComponent);
	}

	const handleClickOutOfComponent = (event) => {
		const previewComponent = document.getElementsByClassName('card-body')[0];
		const isClickInsideComponent = event.target;
		isClickInsideComponent === previewComponent && setSelectedElement(null);
	}

	return (
		<div className="custom-preview">
			<Card className="preview">
				<Card.Body onClick={(event) => handleClickOutOfComponent(event)}>
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
						return <InputElem key={index} id={index} className="input-elem" type={type} component={component} updateComponentText={updateComponentText} onClick={handleClick} />
					})}
				</Card.Body>
			</Card>
		</div>
	);
}

export default Preview;