import { useContext, useEffect, useState } from "react";
import { Button, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Theme";
import logo from '../../assets/images/logo.jpg';
import { useAuth } from "../user/Context/AuthContext";
import './Header.scss';

function Header() {
    const { theme, setTheme } = useContext(ThemeContext);
    const [isDarktheme, setIsDarkTheme] = useState(() => theme === "dark-theme");
    const { user, logout } = useAuth();

    useEffect(() => {
        setIsDarkTheme(theme === "dark-theme")
    }, [theme]);

    const handleLogout = () => {
        logout();
    }

    return (
        <div className="header">
            <Navbar className='px-2'>
                <Navbar.Brand><img alt="Logo" src={logo} height={50} /></Navbar.Brand>
                <Navbar.Collapse>
                    <Nav className='me-auto'>
                        <Nav.Link as={Link} to="/home">Accueil</Nav.Link>
                        <Nav.Link as={Link} to="/templates">Templates</Nav.Link>
                        <Nav.Link as={Link} to="/portfolios">Portfolios</Nav.Link>
                    </Nav>
                    <Nav>
                        <Form.Switch id="theme-switch" onChange={() => setTheme(isDarktheme ? "light-theme" : "dark-theme")} checked={isDarktheme} />
                        {user === undefined ? (
                            <>
                                <Button href='/register' variant='link' className='me-2 register-btn'>Inscription</Button>
                                <Button href='/login' className="connection-btn">Connexion</Button>
                            </>
                        ) : (
                            <>
                                <Button className="deconnection-btn" onClick={handleLogout}>Déconnexion</Button>
                            </>
                        )
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Header