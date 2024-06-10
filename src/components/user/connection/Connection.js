import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import "./Connection.scss";

function Connection() {
	const { login, errorMessage } = useAuth();

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
						{errorMessage != undefined && <p className="error">{errorMessage}</p>}
						<Form.Group controlId="email" className='mb-3'>
							<Form.Label>Identifiant (adresse email)</Form.Label>
							<Form.Control type="text" name="email" value={loginForm.email} onChange={handleValueChanges}></Form.Control>
						</Form.Group>
						<Form.Group controlId="password" className='mb-3'>
							<Form.Label>Mot de passe</Form.Label>
							<Form.Control type="password" name="password" value={loginForm.password} onChange={handleValueChanges}></Form.Control>
						</Form.Group>
						<div className="form-group">
							{/* <Form.Group controlId="stayConnected" className="mb-3">
								<Form.Check type="checkbox" label="Rester connecté" />
							</Form.Group> */}
							{/* <Nav.Link as={Link} to='/connection/forgot-password'>Mot de passe oublié</Nav.Link> */}
						</div>
						<Button type='button' className="btn-connection" onClick={handleSubmit}>Se connecter</Button>
						<Form.Text className='mx-2 secondary-text'>pas encore de compte ?</Form.Text>
						<Button as={Link} to='/register' variant='link' className='btn-registration'>S'inscrire</Button>
					</Form>
				</Card.Body>
			</Card>
		</div>
	)
}

export default Connection