import { Container, Row, Card, Col } from "react-bootstrap";
import { BsPlusSquare } from "react-icons/bs";
import { Link } from "react-router-dom";
import './Portfolio.scss';
import { useEffect, useState } from "react";
import { environment } from "../../environment/environment.developments";

function Portfolio() {
    const [portfolios, setPortfolios] = useState([]);

    useEffect(() => {
        fetch(environment.apiURL+'/controllers/portfolios/get_all')
            .then(response => response.json())
            .then(data => setPortfolios(data))
            .catch(error => console.error('Error fetching portfolios:', error));
    }, []);

    return (
        <div>
            <Container>
                <Row xs={4} className="my-4">
                    {portfolios.map(portfolio => 
                    <Col key={portfolio.id} className="my-2">
                        <Card style={{height: '150px'}} className="portfolio-card">
                            <Card.Body>
                                <Card.Title>{portfolio.name}</Card.Title>
                                <Card.Text>De : {portfolio.owner_id}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>)}
                    <Col className="my-2">
                        <Card style={{height: '150px'}} as={Link} to="/custom" className="portfolio-card">
                            <Card.Body className="d-flex align-items-center justify-content-center">
                                <BsPlusSquare />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Portfolio
