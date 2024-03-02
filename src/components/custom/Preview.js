import { register } from "swiper/element/bundle";
import { Card } from "react-bootstrap";
import './Preview.scss';

register();

function Preview({ customComponent, setSelectedElement }) {
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
										return <div key={index} style={{width:'100px', height:'50px', border:'1px solid black'}} onClick={() => handleClick({elem: 'div'})}></div>
									case 'h1':
										return <h1 key={index} style={{width:'100px', height:'50px', border:'1px solid black'}} onClick={() => handleClick({elem: 'h1'})}>Titre</h1>
									case 'span':
										return <span key={index} style={{width:'100px', height:'50px', border:'1px solid black'}} onClick={() => handleClick({elem: 'span'})}>Zone de texte</span>
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