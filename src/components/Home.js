import { Container, Form, Button } from "react-bootstrap";

function Home() {
    return (
        <div>
            <Container>
                <Form className="d-flex">
                    <Form.Select>
                        <option>Type de recherche</option>
                        <option value="1">Personne</option>
                        <option value="2">Template</option>
                    </Form.Select>
                    <Form.Control type="search" className="me-2" />
                    <Button>Rechercher</Button>
                </Form>
                
            </Container>
        </div>
    );
}

export default Home