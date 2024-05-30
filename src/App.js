import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useEffect } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import { ThemeContext } from './Theme.js';
import ProtectedRoute from "./components/ProtectedRoute.js";
import Custom from './components/custom/Custom.js';
import CustomTemplate from './components/custom/CustomTemplate.js';
import Footer from './components/footer/Footer.js';
import Header from './components/header/Header.js';
import Home from './components/home/Home.js';
import Portfolio from './components/portfolio/Portfolio.js';
import Template from './components/template/Template.js';
import { AuthProvider } from './components/user/Context/AuthContext.js';
import Connection from './components/user/connection/Connection.js';
import Registration from './components/user/registration/Registration.js';
import LinkedInRedirectPage from './components/view/LinkedInRedirectPage.js';
import ViewPortfolio from './components/view/ViewPortfolio.js';

function App() {
	const { theme } = useContext(ThemeContext);

	useEffect(() => {
		return () => {
			document.title = 'GenPort'
		};
	}, []);

	return (
		<AuthProvider>
			<div className={theme}>
				<Header />
				<Routes>
					<Route path='/register' exact element={<Registration />} />
					<Route path='/login' exact element={<Connection />} />
					<Route path="/home" index exact element={<Home />} />
					<Route path='/templates' exact element={<Template />} />
					<Route path='/portfolios' exact element={<ProtectedRoute><Portfolio /></ProtectedRoute>} />
					<Route path='/custom/:model' exact element={<ProtectedRoute><Custom /></ProtectedRoute>} />
					<Route path='/custom/:model/:id' element={<ProtectedRoute><CustomTemplate /></ProtectedRoute>} />
					<Route path='/view/:id' element={<ProtectedRoute><ViewPortfolio /></ProtectedRoute>} />
					<Route path='/linkedinredirect' element={<ProtectedRoute><LinkedInRedirectPage /></ProtectedRoute>} />
					<Route path="*" element={<Navigate to="/home" replace />} />
				</Routes>
				<Outlet />
				<Footer />
			</div>
		</AuthProvider>
	);
}

export default App;
