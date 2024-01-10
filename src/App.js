import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/header/Header.js';
import Home from './components/home/Home.js';
import Template from './components/template/Template.js';
import Custom from './components/custom/Custom.js';
import { useContext } from 'react';
import { ThemeContext } from './Theme.js';
import './App.css';


function App() {
	const { theme } = useContext(ThemeContext);

	return (
		<div className={`${theme}`}>
			<Header />
			<Routes>
				<Route path="/home" index element={<Home />} />
				<Route path='/template' element={<Template />} />
				<Route path='/custom' element={<Custom />} />
			</Routes>
			<Outlet />
		</div>
	);
}

export default App;
