import { Card } from "react-bootstrap";
import './Preview.scss';
import Shape from "./elements/Shape";
import Title from "./elements/Title";
import TextZone from "./elements/TextZone";
import Image from "./elements/Image";
import Icon from "./elements/Icon";

function Preview({ customComponent, setSelectedElement, shapeProps, titleProps, textProps, imageProps, iconProps }) {

	const handleClick = (index) => {
		setSelectedElement(document.getElementById(index));
	}

	return (
		<div className="custom-preview">
			<Card className="preview">
				<Card.Body>
					{customComponent.map((component, index) => {
						switch (component.elem) {
							case 'div':
								return <Shape key={index} id={index} {...shapeProps[index]} onClick={() => handleClick(index)} />
							case 'h1':
								return <Title key={index} id={index} {...titleProps[index]} onClick={() => handleClick(index)} />
							case 'span':
								return <TextZone key={index} id={index} {...textProps[index]} onClick={() => handleClick(index)} />
							case 'img':
								return <Image key={index} id={index} {...imageProps[index]} onClick={() => handleClick(index)} />
							case 'i':
								return <Icon key={index} id={index} {...iconProps[index]} onClick={() => handleClick(index)} />
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