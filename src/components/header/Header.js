import { Link } from "react-router-dom";
import { Button, Nav, Navbar, Form } from 'react-bootstrap';
import './Header.scss';
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../Theme";

function Header() {
    const { theme, setTheme} = useContext(ThemeContext);
	const [isDarktheme, setIsDarkTheme] = useState(() => theme === "dark-theme");

	useEffect(() => {
		setIsDarkTheme(theme === "dark-theme")
	}, [theme]);

    return (
        <header>
            <Navbar className='px-2 py-3'>
                <Navbar.Brand>GenPort</Navbar.Brand>
                <Navbar.Collapse>
                    <Nav className='me-auto'>
                        <Nav.Link as={Link} to="/home" >Accueil</Nav.Link>
                        <Nav.Link as={Link} to="/templates">Templates</Nav.Link>
                        <Nav.Link as={Link} to="/portfolios">Portfolios</Nav.Link>
                    </Nav>
                    <Nav>
                        <Form.Switch id="theme-switch" onChange={() => setTheme(isDarktheme ? "light-theme" : "dark-theme")} checked={isDarktheme} />
                        <Button href='/registration' variant='link' className='me-2'>Inscription</Button>
                        <Button href='/connection' variant='outline-light'>Connexion</Button>
                    </Nav> 
                </Navbar.Collapse>
            </Navbar> 
        </header>
    );
}

export default Header