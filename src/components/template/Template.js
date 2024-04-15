import { Container, Row, Card, Col } from "react-bootstrap";
import { BsPlusSquare } from "react-icons/bs";
import { Link } from "react-router-dom";
import './Template.scss';
import { useEffect, useState } from "react";
import { environment } from "../../environment/environment.developments";

// Affichage des templates
function Template() {
    const [templates, setTemplates] = useState([]);

    useEffect(() => {
        fetch(environment.apiURL+'/controllers/templates/get_all')
            .then(response => response.json())
            .then(data => setTemplates(data))
            .catch(error => console.error('Error fetching templates:', error));
    }, []);

    return (
        <div className="templates">
            <Container>
                <Row xs={4} className="my-4">
                    {templates.map(template => 
                    <Col key={template.id} className="my-2">
                        <Card style={{height: '150px'}} as={Link} to={'/custom/templates/'+template.id} className="template-card"> {/** Redirection modif template */}
                            <Card.Body>
                                <Card.Title>{template.name}</Card.Title>
                                <Card.Subtitle>{template.description}</Card.Subtitle>
                                <Card.Text>De : {template.owner_id}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>)}
                    <Col className="my-2">
                        <Card style={{height: '150px'}} as={Link} to="/custom/templates" className="template-card"> {/** Redirection création template */}
                            <Card.Body className="d-flex align-items-center justify-content-center">
                                <BsPlusSquare className="add-template" />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Template
