import { register } from "swiper/element/bundle";
import { Card } from "react-bootstrap";
import './Preview.scss';
import Shape from "./elements/Shape";
import Title from "./elements/Title";
import TextZone from "./elements/TextZone.Js";

register();

function Preview({ customComponent, setSelectedElement, shapeProps }) {
	const handleClick = (component) => {
        setSelectedElement(component);
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
										return <Shape key={index} {...shapeProps} onClick={() => handleClick({elem: 'div'})} />
									case 'h1':
										return <Title key={index} onClick={() => handleClick({elem: 'h1'})} />
									case 'span':
										return <TextZone key={index} onClick={() => handleClick({elem: 'span'})}/>
									case 'img':
										return <img key={index} src="" alt="upload" style={{width:'110px', height:'110px'}} onClick={() => handleClick({elem: 'img'})}></img>
									case 'i':
										return <i key={index} onClick={() => handleClick({elem: 'i'})}></i>
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