import { Card } from 'react-bootstrap';
import Title from '../custom/elements/Title';
import TextZone from '../custom/elements/TextZone';
import Image from '../custom/elements/Image';
import Bouton from "../custom/elements/Bouton";
import Shape from '../custom/elements/Shape';

function PreviewPortfolio({ components }) {

	return (
		<Card className='preview'>
			<Card.Body className='custom-preview'>
				{components.map((component, index) => {
					switch (component.value_type) {
						case 1:
							if(component.information_type === 2) {
								return <Title key={index} id={index} component={component} />
							} else {
								return <TextZone key={index} id={index} component={component}/>
							}
						case 2:
							return <Image key={index} id={index} component={component} onClick={() => {}}/>
						case 3:
							return <Bouton key={index} id={index} component={component} />
						case 5:
							return <Shape key={index} id={index} component={component} onClick={() => {}} />
						default:
							return null;
					}
				})}
			</Card.Body>
		</Card>
	);
}

export default PreviewPortfolio;