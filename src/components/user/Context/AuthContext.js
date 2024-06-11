import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { environment } from '../../../environment/environment.developments';

const initState = {
	user: undefined,
};

const AuthContext = createContext({
	...initState,
	register: () => {},
	login: () => {},
	logout: () => {}
});

export const AuthProvider = ({ children }) => {
	const navigate = useNavigate();
	const [userLogged, setUserLogged] = useState(() => {
		const savedUser = localStorage.getItem('user');
		return savedUser ? { user: JSON.parse(savedUser) } : initState;
	});
	const [errorMessage, setErrorMessage] = useState(undefined);

	useEffect(() => {
		if (userLogged.user) {
			localStorage.setItem('user', JSON.stringify(userLogged.user));
		} else {
			localStorage.removeItem('user');
		}
	}, [userLogged]);

	const register = async (registerForm) => {
		try {
			const response = await fetch(environment.apiURL + '/controllers/user/save', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(registerForm)
			});

			if (!response.ok) {
				throw new Error('Failed to register');
			}

			alert('Votre compte a été créé avec succès');
			navigate("/login");
		} catch (error) {
			console.error('Error while trying to create account:', error.message);
			throw (error);
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

			if (!response.ok) {
				setErrorMessage("Votre identifiant ou mot de passe est incorrect");
				throw new Error('Connection failed');
			}

			const responseData = await response.json();
			setUserLogged({ user: responseData.user });
			setErrorMessage(undefined);
			navigate("/home");
		} catch (error) {
			console.error('Error while trying to connect:', error.message);
			throw (error);
		}
	}

	const logout = () => {
		setUserLogged(initState);
		localStorage.removeItem('user');
		navigate("/login");
	}

	return (
		<AuthContext.Provider value={{ ...userLogged, errorMessage, register, login, logout }}>
			{children}
		</AuthContext.Provider>
	)
}

export function useAuth() {
	return React.useContext(AuthContext);
}
