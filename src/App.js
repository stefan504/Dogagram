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
				<Route exact path="/">
					<Landing />
					<Book />
				</Route>

				<Switch>
					<Route exact path="/news">
						<News />
					</Route>
					<Route exact path="/stay&plan">
						<Stay />
					</Route>
					<Route exact path="/explore">
						<Explore />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
