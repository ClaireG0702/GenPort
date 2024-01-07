import { Link } from "react-router-dom";
import { Button, Nav, Navbar } from 'react-bootstrap';

function Header() {
    return (
        <header>
            <Navbar bg="light" data-bs-theme="light" className='px-2 py-3'>
                <Navbar.Brand>GenPort</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className='me-auto'>
                        <Nav.Link to="/" >Accueil</Nav.Link>
                        <Nav.Link to="/template" >Templates</Nav.Link>
                        <Nav.Link>Portfolio</Nav.Link>
                    </Nav>
                    {/* <Nav>
                        <Button variant='outline-secondary' className='me-2'>Inscription</Button>
                        <Button variant='outline-primary'>Connexion</Button>
                    </Nav> */}
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

export default Header