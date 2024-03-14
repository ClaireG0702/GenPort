import { Card } from "react-bootstrap";
import InputElem from "./elements/InputElem";
import './Preview.scss';

// Affichage d'un template existant
function PreviewTemplate({ components, updateComponentText }) {

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
						return <InputElem key={index} id={index} type={type} component={component} updateComponentText={updateComponentText} />
					})}
				</Card.Body>
			</Card>
		</div>
	);
}

export default PreviewTemplate;