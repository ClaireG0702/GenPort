import './Registration.scss';
import { Button, Card, Form } from "react-bootstrap"

function Registration() {
	return (
		<div>
			<Card className="registration-card mt-5">
				<Card.Header>Créer un compte</Card.Header>
				<Card.Body>
					<Form className="registration-form">
						<Form.Group controlId="first_name" className='mb-3'>
							<Form.Label>Prénom</Form.Label>
							<Form.Control type="text"></Form.Control>
						</Form.Group>
						<Form.Group controlId="last_name" className='mb-3'>
							<Form.Label>Nom</Form.Label>
							<Form.Control type="text"></Form.Control>
						</Form.Group>
						<Form.Group controlId="pseudo" className='mb-3'>
							<Form.Label>Pseudo</Form.Label>
							<Form.Control type="text"></Form.Control>
						</Form.Group>
						<Form.Group controlId="email" className='mb-3'>
							<Form.Label>Email</Form.Label>
							<Form.Control type="email"></Form.Control>
						</Form.Group>
						<Form.Group controlId="password" className='mb-3'>
							<Form.Label>Mot de passe</Form.Label>
							<Form.Control type="password"></Form.Control>
						</Form.Group>
						<Form.Group controlId="confirm_password" className='mb-3'>
							<Form.Label>Confirmation du mot de passe</Form.Label>
							<Form.Control type="password"></Form.Control>
						</Form.Group>
						<Button type='submit'>S'inscrire</Button>
						<Form.Text className='mx-2'>déjà un compte ?</Form.Text>
						<Button href='/connection' variant='link' className='btn-connection'>Se connecter</Button>
					</Form>
				</Card.Body>
			</Card>
		</div>
	)
}

export default Registration