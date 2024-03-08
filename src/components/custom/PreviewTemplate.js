import { Card } from "react-bootstrap";
import './Preview.scss';
import Title from "./elements/Title";
import TextZone from "./elements/TextZone";
import Image from "./elements/Image";
import { useState } from "react";

function PreviewTemplate({ components, updateTemplateData }) {
	const [updatedComponents, setUpdatedComponents] = useState(components);

    const handleComponentChange = (index, updatedComponent) => {
        setUpdatedComponents(prevComponents => ({
            ...prevComponents,
            [index]: updatedComponent
        }));
        
        updateTemplateData({ components: updatedComponents });
    };

	return (
		<div className="custom-preview">
			<Card className="preview">
				<Card.Body>
					{components.map((component, index) => {
						switch (component.value_type) {
							case 1:
								if (component.information_type === 2) {
									return <Title key={index} id={index} component={component} 
									textValue={component.values.texte} onChange={handleComponentChange} />
								} else {
									return <TextZone key={index} id={index} component={component} 
									textValue={component.values.texte} onChange={handleComponentChange} />
								}
							case 2:
								return <Image key={index} id={index} component={component} onChange={handleComponentChange} />
							default:
								return null;
						}
					})}
				</Card.Body>
			</Card>
		</div>
	);
}

export default PreviewTemplate;