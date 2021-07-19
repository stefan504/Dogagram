import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import News from './components/News';
import Stay from './components/Stay';
import Explore from './components/Explore';
import Landing from './components/Landing';
import Book from './components/Book';

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Switch>
					<Route path="/news">
						<News />
					</Route>
					<Route path="/stay&plan">
						<Stay />
					</Route>
					<Route path="/explore">
						<Explore />
					</Route>
				</Switch>
			</Router>
			<Landing />
			<Book />
		</div>
	);
}

export default App;
