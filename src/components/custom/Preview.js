import { useState } from "react";
import { register } from "swiper/element/bundle";
import { Card } from "react-bootstrap";
import './Preview.scss';

register();

function Preview({ customComponent }) {
	return (
		<div className="custom-preview">
			<swiper-container>
				<swiper-slide>
					<Card>
						<Card.Body>
							{ customComponent.map((component, index) => {
								switch(component.elem) {
									case 'div':
										return <div key={index} style={{width:'100px', height:'50px', backgroundColor:'blue'}}></div>
										break
									case 'h1':
										return <h1 key={index} style={{width:'100px', height:'50px', backgroundColor:'pink'}}>Titre</h1>
										break
									case 'span':
										return <span key={index} style={{width:'100px', height:'50px', backgroundColor:'orange'}}>Zone de texte</span>	
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