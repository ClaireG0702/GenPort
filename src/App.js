import { useContext, useEffect } from 'react';
import { Navigate, BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { ThemeContext } from './Theme.js';
import { AuthProvider } from './components/user/Context/AuthContext.js';
import Header from './components/header/Header.js';
import Registration from './components/user/registration/Registration.js';
import Connection from './components/user/connection/Connection.js';
import Home from './components/home/Home.js';
import Template from './components/template/Template.js';
import Portfolio from './components/portfolio/Portfolio.js';
import Custom from './components/custom/Custom.js';
import CustomTemplate from './components/custom/CustomTemplate.js';
import ViewPortfolio from './components/view/ViewPortfolio.js';
import Footer from './components/footer/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LinkedInRedirectPage from './components/view/LinkedInRedirectPage.js';


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
					<Route path='/portfolios' exact element={<Portfolio />} />
					<Route path='/custom/:model' exact element={<Custom />} />
					<Route path='/custom/:model/:id' element={<CustomTemplate />} />
					<Route path='/view/:id' element={<ViewPortfolio />} />
					<Route path='/linkedinredirect' element={<LinkedInRedirectPage />} />
					<Route path="*" element={<Navigate to="/home" replace />} />
				</Routes>
				<Outlet />
				<Footer />
			</div>
		</AuthProvider>
	);
}

export default App;
