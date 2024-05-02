import { environment } from '../../../environment/environment.developments';
import React, { createContext, useContext, useState } from 'react';

const initState = {
	user: undefined
}

const AuthContext = createContext({
	...initState,
	register: () => {},
	login: () => {},
	logout: () => {}
});

export const AuthProvider = ({children}) => {
	const [userLogged, setUserLogged] = useState(initState);

	const register = async (registerForm) => {
		try {
			const response = await fetch(environment.apiURL	+ '/controllers/user/save', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(registerForm)
			});

			if(!response.ok) {
				throw new Error('Failed to register');
			}

			alert('Votre compte a été créé avec succès');
			// window.location.href = '/login';
		} catch(error) {
			console.error('Error while trying to create account:', error.message);
			throw(error);
		}
	}

	const login = async (loginForm) => {
		try {
			const response = await fetch(environment.apiURL + '/api/login_check', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(loginForm)
			});

			if(!response.ok) {
				throw new Error('Connection failed');
			}

			const responseData = await response.json();
			setUserLogged(responseData);
			// window.location.href = '/home';
		} catch(error) {
			console.error('Error while trying to connect:', error.message);
			throw(error);
		}
	}

	const logout = () => {
		setUserLogged(initState);
	}

	return (
		<AuthContext.Provider value={{ ...userLogged, register, login, logout }}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => useContext(AuthContext);