import { Container, Form, Button, Card, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Home.scss';

function Home() {

	return (
		<div>
			<Container>
				<InputGroup className="my-4 d-flex flex-wrap align-items-stretch w-100 position-relative">
					<Form.Select className="input-group-text col-md-4" id="searchType">
						<option>Type de recherche</option>
						<option value="1">Personne</option>
						<option value="2">Template</option>
					</Form.Select>
					<Form.Control type="text" className="search me-2" id="search"/>
					<Button type="submit" variant="outline-success" >Rechercher</Button>
				</InputGroup>
			</Container>

			<div className="cards">
				<Card className="text-center mb-4">
					<Card.Body>
						<Card.Text>
							GenPort est un site de Génération de Portfolio,
						</Card.Text>
					</Card.Body>
				</Card>

				<Card className="text-center">
					<Card.Body>
						<Card.Text>
							Template
						</Card.Text>
						<Link to="/template">
							<Button>Voir les templates</Button>
						</Link>
					</Card.Body>
				</Card>
			</div>
		</div>
	);
}

export default Home