import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Header from './components/header/Header.js';
import Registration from './components/user/registration/Registration.js';
import Connection from './components/user/connection/Connection.js';
import Home from './components/home/Home.js';
import Template from './components/template/Template.js';
import Portfolio from './components/portfolio/Portfolio.js';
import Custom from './components/custom/Custom.js';
import CustomTemplate from './components/custom/CustomTemplate.js';
import ViewPortfolio from './components/view/ViewPortfolio.js';
import { useContext, useEffect } from 'react';
import { ThemeContext } from './Theme.js';
import './App.css';


function App() {
	const { theme } = useContext(ThemeContext);

	useEffect(() => {
		return () => {
			document.title = 'GenPort'
		};
	}, []);

	return (
		<div className={ theme }>
			<Header />
			<Routes>
				<Route path='/registration'exact element={<Registration />} />
				<Route path='/connection' exact element={<Connection />} />
				<Route path="/home" index exact element={<Home />} />
				<Route path='/templates' exact element={<Template />} />
				<Route path='/portfolios' exact element={<Portfolio />} />
				<Route path='/custom' exact element={<Custom />} />
				<Route path='/custom/:model/:id' element={<CustomTemplate />} />
				<Route path='/view/:id' element={<ViewPortfolio />} />
				<Route path="*" element={<Navigate to="/home" replace />} />
			</Routes>
			<Outlet />
		</div>
	);
}

export default App;
