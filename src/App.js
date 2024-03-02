import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/header/Header.js';
import Registration from './components/user/registration/Registration.js';
import Connection from './components/user/connection/Connection.js';
import Home from './components/home/Home.js';
import Template from './components/template/Template.js';
import Portfolio from './components/portfolio/Portfolio.js';
import Custom from './components/custom/Custom.js';
import { useContext } from 'react';
import { ThemeContext } from './Theme.js';
import './App.css';


function App() {
	const { theme } = useContext(ThemeContext);

	return (
		<div className={ theme }>
			<Header />
			<Routes>
				<Route path='/registration' element={<Registration />} />
				<Route path='/connection' element={<Connection />} />
				<Route path="/home" index element={<Home />} />
				<Route path='/templates' element={<Template />} />
				<Route path='/portfolios' element={<Portfolio />} />
				<Route path='/custom' element={<Custom />} />
			</Routes>
			<Outlet />
		</div>
	);
}

export default App;
