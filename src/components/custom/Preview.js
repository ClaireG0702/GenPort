import { useState } from "react";
import { register } from "swiper/element/bundle";
import { Card } from "react-bootstrap";
import './Preview.scss';

register();

function Preview({customComponent}) {
	return (
		<div className="custom-preview">
			<swiper-container>
				<swiper-slide>
					<Card>
						<Card.Body>
							
						</Card.Body>
					</Card>
				</swiper-slide>
			</swiper-container>
			<footer></footer>
		</div>
	);
}

export default Preview;