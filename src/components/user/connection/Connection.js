import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { Button, Card, Form, Nav } from "react-bootstrap";
import "./Connection.scss";

function Connection() {
	const { login } = useAuth();

	const [loginForm, setLoginForm] = useState({
		email: '',
		password: ''
	});

	const handleValueChanges = (event) => {
		const { name, value } = event.target;
		setLoginForm({
			...loginForm,
			[name]: value
		});
	}

	const handleSubmit = () => {
		login(loginForm);
	}

	return (
		<div className="container-connection-form">
			<Card className="connection-card">
				<Card.Header>Se connecter</Card.Header>
				<Card.Body>
					<Form className="connection-form">
						<Form.Group controlId="email" className='mb-3'>
							<Form.Label>Identifiant</Form.Label>
							<Form.Control type="text" name="email" value={loginForm.email} onChange={handleValueChanges}></Form.Control>
						</Form.Group>
						<Form.Group controlId="password" className='mb-3'>
							<Form.Label>Mot de passe</Form.Label>
							<Form.Control type="password" name="password" value={loginForm.password} onChange={handleValueChanges}></Form.Control>
						</Form.Group>
						<div className="form-group">
							<Form.Group controlId="stayConnected" className="mb-3">
								<Form.Check type="checkbox" label="Rester connecté" />
							</Form.Group>
							{/* <Nav.Link as={Link} to='/connection/forgot-password'>Mot de passe oublié</Nav.Link> */}
						</div>
						<Button type='button' onClick={handleSubmit}>Se connecter</Button>
						<Form.Text className='mx-2'>pas encore de compte ?</Form.Text>
						<Button href='/registration' variant='link' className='btn-connection'>S'inscrire</Button>
					</Form>
				</Card.Body>
			</Card>
		</div>
	)
}

export default Connection