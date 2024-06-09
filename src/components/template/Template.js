import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { BsPlusSquare } from "react-icons/bs";
import { Link } from "react-router-dom";
import { environment } from "../../environment/environment.developments";
import { useAuth } from '../user/Context/AuthContext';
import './Template.scss';
import DeleteIcon from "@mui/icons-material/Delete";

// Affichage des templates
function Template() {
    const { user } = useAuth();
    const [templates, setTemplates] = useState([]);
    const [authors, setAuthors] = useState({})

    useEffect(() => {
        fetch(environment.apiURL + '/controllers/templates/get_all')
            .then(response => response.json())
            .then(data => setTemplates(data))
            .catch(error => console.error('Error fetching templates:', error));
    }, []);

    useEffect(() => {
        templates.forEach(template => {
            getAuthor(template.owner_id);
        });
    }, [templates]);

    function getAuthor(id) {
        fetch(environment.apiURL + `/controllers/user/get_author?id=${id}`)
        .then(response => response.json())
        .then(author => {
            setAuthors(prevAuthors => ({
                ...prevAuthors,
                [id]: author.name
            }));
        })
        .catch(error => console.error('Error fetching author:', error));
    }

    const deleteTemplate = async (id, event) => {
        event.preventDefault();
        event.stopPropagation();
        try {
            const response = await fetch(environment.apiURL + `/controllers/templates/remove?id=${id}`, {
                method: 'GET',
            });

            if (response.ok) {
                alert('Le template a bien été supprimé');
                setTemplates(templates.filter(template => template.id !== id)); // Mise à jour de l'état local après la suppression
            } else {
                console.error('Failed to delete template');
            }
        } catch (error) {
            console.error('Error deleting template:', error);
        }
    }

    return (
        <div className="templates">
            <Container>
                <Row xs={4} className="my-4">
                    {templates.filter(template => template.isPublic || (user &&template.owner_id === user.id)).map(template =>
                        <Col key={template.id} className="my-2">
                            <Card style={{ height: '150px' }} as={Link} to={'/custom/templates/' + template.id} className="template-card"> {/** Redirection modif template */}
                                <Card.Body>
                                    <Card.Title>{template.name}</Card.Title>
                                    <Card.Subtitle>{template.description}</Card.Subtitle>
                                    <Card.Text>De : {authors[template.owner_id] || 'Chargement...'}</Card.Text>
                                    {user && template.owner_id === user.id && (
                                        <Card.Text onClick={(event) => deleteTemplate(template.id, event)}>
                                            <DeleteIcon /> Supprimer
                                        </Card.Text>
                                    )}
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                    {user && (
                        <Col className="my-2">
                            <Card style={{ height: '150px' }} as={Link} to="/custom/templates" className="template-card"> {/** Redirection création template */}
                                <Card.Body className="d-flex align-items-center justify-content-center">
                                    <BsPlusSquare className="add-template" />
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    )
}

export default Template
