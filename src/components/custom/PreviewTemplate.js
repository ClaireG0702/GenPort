import { Card, Form } from "react-bootstrap";
import './Preview.scss';
import Title from "./elements/Title";
import TextZone from "./elements/TextZone";
import Image from "./elements/Image";
import { useState } from "react";
import InputElem from "./elements/InputElem";

// Affichage d'un template existant
function PreviewTemplate({ components, updateTemplateData }) {

	return (
		<div className="custom-preview">
			<Card className="preview">
				<Card.Body>
					<Form>
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
							return <InputElem key={index} id={index} type={type} component={component} updateTemplateData={updateTemplateData} />
						})}
					</Form>
				</Card.Body>
			</Card>
		</div>
	);
}

export default PreviewTemplate;