import { Card } from "react-bootstrap";
import svgTemplate from "../../assets/images/undraw_website_builder.svg";
import './Home.scss';

function Home() {

	return (
		<div className="home">
			<div className="cards">
				<Card className="text-center mt-4 mb-4 home-card slogan">
					<Card.Body>
						<Card.Text>
							Affichez vos compétences, partagez vos passions.
						</Card.Text>
						<img src={svgTemplate} width="500px" alt="Image_Template" />
						<Card.Text>
							GenPort rend la création de portfolios simple et élégante.
						</Card.Text>
					</Card.Body>
				</Card>
			</div>
		</div>
	);
}

export default Home