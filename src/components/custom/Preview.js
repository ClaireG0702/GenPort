import { Card } from "react-bootstrap";
import Image from "./elements/Image";
import Shape from "./elements/Shape";
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
				<Card.Body style={{height: '100%'}} onClick={(event) => handleClickOutOfComponent(event)}>
				{components.map((component, index) => {
						switch(component.value_type) {
							case 2:
								return <Image key={index} id={index} className='image-elem' component={component} onClick={handleClick} />
							case 3:
								return <InputElem key={index} id={index} className="button-elem" component={component} elem="button" updateComponentText={updateComponentText} onClick={handleClick} />
							case 5:
								return <Shape key={index} id={index} className="shape-elem" component={component} onClick={handleClick} />
							default:
								return <InputElem key={index} id={index} className="input-elem" component={component} elem="text" updateComponentText={updateComponentText} onClick={handleClick} />
						}
					})}
				</Card.Body>
			</Card>
		</div>
	);
}

export default Preview;