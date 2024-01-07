import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Template from './components/Template.js';
import Custom from './components/Custom.js';


function App() {
	return (
		<div>
			<Header />
			<Router>
				<Routes>
					<Route path="/" exact component={Home}/>
					<Route path='/template' component={Template} />
					<Route path='/custom' component={Custom} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
