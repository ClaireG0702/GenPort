import { Container, Row, Card, Col } from "react-bootstrap";
import { BsPlusSquare } from "react-icons/bs";
import { Link } from "react-router-dom";
import './Portfolio.scss';
import { useEffect, useState } from "react";
import { environment } from "../../environment/environment.developments";
import { useAuth } from "../user/Context/AuthContext";
import Loader from "../loader/Loader";

// Affichage des portfolios
function Portfolio() {
    const { user } = useAuth();
    const [portfolios, setPortfolios] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(environment.apiURL + '/controllers/portfolios/get_all')
            .then(response => response.json())
            .then(data => {
                setPortfolios(data)
                setLoading(false)
            })
            .catch(error => {
                console.error('Error fetching portfolios:', error)
                setLoading(false)
            });
    }, []);

    return (
        <div className="portfolios">
            {loading ? (
                <Loader />
            ) : (
                <Container>
                    <Row xs={4} className="my-4">
                        {portfolios.filter(portfolio => portfolio.owner_id === user.id).map(portfolio =>
                            <Col key={portfolio.id} className="my-2">
                                <Card style={{ height: '150px' }} as={Link} to={'/view/' + portfolio.id} className="portfolio-card">
                                    <Card.Body>
                                        <Card.Title>{portfolio.name}</Card.Title>
                                        <Card.Subtitle>{portfolio.description}</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            </Col>)}
                        <Col className="my-2">
                            <Card style={{ height: '150px' }} as={Link} to="/custom/portfolios" className="portfolio-card">
                                <Card.Body className="d-flex align-items-center justify-content-center">
                                    <BsPlusSquare className="add-portfolio" />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            )}
        </div>
    )
}

export default Portfolio
