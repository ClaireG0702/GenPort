import { useEffect, useState } from "react";
import { Card, Col, Container, Row, InputGroup, Form, Button } from "react-bootstrap";
import { BsPlusSquare } from "react-icons/bs";
import { Link } from "react-router-dom";
import { environment } from "../../environment/environment.developments";
import { useAuth } from '../user/Context/AuthContext';
import './Template.scss';
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import Loader from "../loader/Loader";

// Affichage des templates
function Template() {
    const { user } = useAuth();
    const [templates, setTemplates] = useState([]);
    const [authors, setAuthors] = useState({});
    const [searchType, setSearchType] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredTemplates, setFilteredTemplates] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(environment.apiURL + '/controllers/templates/get_all', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                setTemplates(data)
                // setLoading(false)
            })
            .catch(error => {
                console.error('Error fetching templates:', error)
                // setLoading(false)
            });
    }, []);

    useEffect(() => {
        templates.forEach(template => {
            getAuthor(template.owner_id);
        });
    }, [templates]);

    useEffect(() => {
        handleSearch();
    }, [searchType, searchTerm, templates]);

    function getAuthor(id) {
        fetch(environment.apiURL + `/controllers/user/get_author?id=${id}`)
            .then(response => response.json())
            .then(author => {
                setAuthors(prevAuthors => ({
                    ...prevAuthors,
                    [id]: author.name
                }));
                setLoading(false)
            })
            .catch(error => {
                console.error('Error fetching author:', error)
                setLoading(false)
            });
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

    const handleSearchTypeChange = (event) => {
        setSearchType(event.target.value);
    }

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleSearch = () => {
        if (searchType === '1') {
            setFilteredTemplates(templates.filter(template => authors[template.owner_id]?.toLowerCase().includes(searchTerm.toLowerCase())));
        } else if (searchType === '2') {
            setFilteredTemplates(templates.filter(template => template.name.toLowerCase().includes(searchTerm.toLowerCase())));
        } else {
            setFilteredTemplates(templates);
        }
    }

    return (
        <div className="templates">
            <Container>
                <InputGroup className="search-bar">
                    <Form.Select className="input-group-text col-md-4 select-search" id="searchType" onChange={handleSearchTypeChange}>
                        <option value="">Type de recherche</option>
                        <option value="1">Personne</option>
                        <option value="2">Nom de template</option>
                    </Form.Select>
                    <Form.Control type="text" className="search input-search" id="search" value={searchTerm} onChange={handleSearchTermChange} />
                    <Button type="button" className="btn-search" onClick={handleSearch}><SearchIcon /></Button>
                </InputGroup>
            </Container>
            {loading ? (
                <Loader />
            ) : (
                <Container>
                    <Row xs={4} className="my-4">
                        {filteredTemplates.filter(template => template.isPublic || (user && template.owner_id === user.id)).map(template =>
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
            )}
        </div>
    )
}

export default Template;
