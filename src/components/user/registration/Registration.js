import { Button, Card, Form } from "react-bootstrap";
import './Registration.scss';
import { useState } from "react";
import { useAuth } from "../Context/AuthContext";

function Registration() {
	const { register } = useAuth();

	const [validated, setValidated] = useState(false)
	const [isFieldValid, setIsFieldValid] = useState({
		first_name: null,
		last_name: null,
		user_name: null,
		email: null,
		password: null,
		confirm_password: null
	})
	const [userData, setUserData] = useState({
		first_name: '',
		last_name: '',
		user_name: '',
		email: '',
		password: '',
		confirm_password: ''
	})

	const handleValueChanges = (event) => {
		const { name, value } = event.target;
		setUserData({
			...userData,
			[name]: value
		})
	}

	const handleVerificationValue = (event) => {
		const { name, value } = event.target
		let isValid

		switch (name) {
			case 'user_name':
				isValid = /^[a-zA-Z0-9]+$/.test(value)
				break
			case 'email':
				isValid = /^\S+@\S+\.\S+$/.test(value)
				break
			case 'password':
				isValid = value.length >= 8
				break
			case 'confirm_password':
				isValid = value === userData.password && value.length >= 8
				break
			default:
				break
		}

		setIsFieldValid({
			...isFieldValid,
			[name]: isValid
		})
	}

	const handleSubmit = (event) => {
		const form = event.currentTarget

		if (form.checkValidity === false) {
			event.preventDefault();
			event.stopPropagation();
		} else {
			register(userData)
		}
		setValidated(true)
	}

	return (
		<div className="container-registration-form">
			<Card className="registration-card">
				<Card.Header>Créer un compte</Card.Header>
				<Card.Body>
					<Form className="registration-form" noValidate validated={validated}>
						<div className="form-group mb-3">
							<Form.Group controlId="first_name" className="half-width">
								<Form.Label>Prénom</Form.Label>
								<Form.Control type="text" name="first_name" value={userData.first_name}
									onChange={handleValueChanges} pattern="^[a-zA-Z]+$"
									onBlur={handleVerificationValue} isInvalid={isFieldValid.first_name === false}></Form.Control>
								<Form.Control.Feedback type="invalid">
									Votre prénom doit contenir uniquement des lettres
								</Form.Control.Feedback>
							</Form.Group>
							<Form.Group controlId="last_name" className="half-width">
								<Form.Label>Nom</Form.Label>
								<Form.Control type="text" name="last_name" value={userData.last_name}
									onChange={handleValueChanges} pattern="^[a-zA-Z]+$"
									onBlur={handleVerificationValue} isInvalid={isFieldValid.last_name === false}></Form.Control>
								<Form.Control.Feedback type="invalid">
									Votre nom doit contenir uniquement des lettres
								</Form.Control.Feedback>
							</Form.Group>
						</div>
						<Form.Group controlId="user_name" className='mb-3'>
							<Form.Label>Pseudo</Form.Label>
							<Form.Control type="text" name="user_name" value={userData.user_name}
								onChange={handleValueChanges} required pattern="^[a-zA-Z0-9]+$"
								onBlur={handleVerificationValue} isInvalid={isFieldValid.user_name === false}
								isValid={isFieldValid.user_name}></Form.Control>
							{userData.user_name === '' ? (
								<Form.Control.Feedback type="invalid">
									Ce champs est requis
								</Form.Control.Feedback>) : (
								<Form.Control.Feedback type="invalid">
									Votre nom doit contenir uniquement des caractères alphanumériques
								</Form.Control.Feedback>
							)}
						</Form.Group>
						<Form.Group controlId="email" className='mb-3'>
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" name="email" value={userData.email}
								onChange={handleValueChanges} required
								onBlur={handleVerificationValue} isInvalid={isFieldValid.email === false}
								isValid={isFieldValid.email}></Form.Control>
							{userData.email === '' ? (
								<Form.Control.Feedback type="invalid">
									Ce champs est requis
								</Form.Control.Feedback>) : (
								<Form.Control.Feedback type="invalid">
									Votre adresse mail doit exister
								</Form.Control.Feedback>
							)}
						</Form.Group>
						<Form.Group controlId="password" className='mb-3'>
							<Form.Label>Mot de passe</Form.Label>
							<Form.Control type="password" name="password" value={userData.password}
								onChange={handleValueChanges} required minLength={8}
								onBlur={handleVerificationValue} isInvalid={isFieldValid.password === false}
								isValid={isFieldValid.password}></Form.Control>
							{userData.password === '' ? (
								<Form.Control.Feedback type="invalid">
									Ce champs est requis
								</Form.Control.Feedback>) : (
								<Form.Control.Feedback type="invalid">
									Votre mot de passe doit contenir au moins 8 caractères
								</Form.Control.Feedback>
							)}
						</Form.Group>
						<Form.Group controlId="confirm_password" className='mb-3'>
							<Form.Label>Confirmation du mot de passe</Form.Label>
							<Form.Control type="password" name="confirm_password" value={userData.confirm_password}
								onChange={handleValueChanges} required
								onBlur={handleVerificationValue} isInvalid={isFieldValid.confirm_password === false}
								isValid={isFieldValid.confirm_password}></Form.Control>
							{userData.confirm_password === '' &&
								<Form.Control.Feedback type="invalid">
									Ce champs est requis
								</Form.Control.Feedback>}
							{userData.confirm_password.length < 8 &&
								<Form.Control.Feedback type="invalid">
									Votre mot de passe doit contenir au moins 8 caractères
								</Form.Control.Feedback>}
							{userData.confirm_password !== userData.password &&
								<Form.Control.Feedback type="invalid">
									Les mots de passes ne sont pas identiques
								</Form.Control.Feedback>}
						</Form.Group>
						<Button type='button' onClick={handleSubmit}>S'inscrire</Button>
						<Form.Text className='mx-2'>déjà un compte ?</Form.Text>
						<Button href='/connection' variant='link' className='btn-connection'>Se connecter</Button>
					</Form>
				</Card.Body>
			</Card>
		</div>
	)
}

export default Registration