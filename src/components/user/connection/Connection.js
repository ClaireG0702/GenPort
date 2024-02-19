import { Button, Card, Form } from "react-bootstrap"

function Connection() {
	return (
		<div>
			<Card className="registration-card mt-5">
				<Card.Header>Se connecter</Card.Header>
				<Card.Body>
					<Form className="registration-form">
						<Form.Group controlId="identifier" className='mb-3'>
							<Form.Label>Identifiant</Form.Label>
							<Form.Control type="text"></Form.Control>
						</Form.Group>
						<Form.Group controlId="password" className='mb-3'>
							<Form.Label>Mot de passe</Form.Label>
							<Form.Control type="password"></Form.Control>
						</Form.Group>
						<Form.Group controlId="stayConnected" className="mb-3">
							<Form.Check type="checkbox" label="Rester connecté" />
						</Form.Group>
						<Button type='submit'>Se connecter</Button>
						<Form.Text className='mx-2'>pas encore de compte ?</Form.Text>
						<Button href='/registration' variant='link' className='btn-connection'>S'inscrire</Button>
					</Form>
				</Card.Body>
			</Card>
		</div>
	)

}

export default Connection