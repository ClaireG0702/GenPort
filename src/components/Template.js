import { Container, Row, Card, Col } from "react-bootstrap";
import { templatesList } from "../data/TemplatesList";
import { BsPlusSquare } from "react-icons/bs";

function Template() {
    return (
        <div>
            <Container>
                <Row xs={4} className="my-4">
                    {templatesList.map(({id, name, author}) => 
                    <Col key={id} className="my-2">
                        <Card style={{height: '150px'}}>
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text>De : {author}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>)}
                    <Col className="my-2">
                        <Card style={{height: '150px'}}>
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

export default Template

//boooooop booooooooop boooooooop booooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooop boop