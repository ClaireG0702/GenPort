import { Container, Form, Button, Card, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import svgTemplate from "../../assets/undraw_website_builder.svg"
import './Home.scss';

function Home() {

	return (
		<div className="home">
			<Container>
				<InputGroup className="py-4 d-flex flex-wrap align-items-stretch w-100 position-relative">
					<Form.Select className="input-group-text col-md-4 select-search" id="searchType">
						<option>Type de recherche</option>
						<option value="1">Personne</option>
						<option value="2">Nom de template</option>
					</Form.Select>
					<Form.Control type="text" className="search me-2 input-search" id="search"/>
					<Button type="submit" className="btn-search" >Rechercher</Button>
				</InputGroup>
			</Container>

			<div className="cards">
				<Card className="text-center mb-4 home-card slogan">
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