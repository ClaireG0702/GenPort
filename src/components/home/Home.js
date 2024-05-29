import { Card } from "react-bootstrap";
import svgTemplate from "../../assets/images/undraw_website_builder.svg";
import './Home.scss';

function Home() {

	return (
		<div className="home">
			{/* <Container>
				<InputGroup className="search-bar">
					<Form.Select className="input-group-text col-md-4 select-search" id="searchType">
						<option>Type de recherche</option>
						<option value="1">Personne</option>
						<option value="2">Nom de template</option>
					</Form.Select>
					<Form.Control type="text" className="search input-search" id="search"/>
					<Button type="button" className="btn-search"><SearchIcon /></Button>
				</InputGroup>
			</Container> */}

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