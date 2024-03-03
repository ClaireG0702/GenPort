import { Card } from "react-bootstrap";
import './Preview.scss';
import Shape from "./elements/Shape";
import Title from "./elements/Title";
import TextZone from "./elements/TextZone";

function Preview({ customComponent, setSelectedElement, shapeProps }) {

	const handleClick = (index) => {
        setSelectedElement(document.getElementById(index));
    }

	return (
		<div className="custom-preview">
			<swiper-container>
				<swiper-slide>
					<Card className="preview">
						<Card.Body>
							{ customComponent.map((component, index) => {
								switch(component.elem) {
									case 'div':
										return <Shape key={index} id={index} {...shapeProps[index]} onClick={() => handleClick(index)} />
									case 'h1':
										return <Title key={index} id={index} onClick={() => handleClick(index)} />
									case 'span':
										return <TextZone key={index} id={index} onClick={() => handleClick(index)}/>
									case 'img':
										return <img key={index} id={index} src="" alt="upload" onClick={() => handleClick(index)}></img>
									case 'i':
										return <i key={index} id={index} onClick={() => handleClick(index)}></i>
									default:
										return null;
								}
							})}
						</Card.Body>
					</Card>
				</swiper-slide>
			</swiper-container>
			<footer></footer>
		</div>
	);
}

export default Preview;