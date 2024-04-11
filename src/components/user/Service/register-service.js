import { environment } from "../../../environment/environment.developments"

export async function register(userData) {
	try {
		const response = await fetch(environment.apiURL + '/controllers/user/save', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(userData)
		})

		if(!response.ok) {
			throw new Error('Failed to register user')
		}

		alert('Votre compte a été créé')
		window.location.href = '/connection'
		const responseData = await response.json();
		return responseData;
	} catch(error) {
		console.error('Error registering user:', error.message);
	throw error;
	}
}