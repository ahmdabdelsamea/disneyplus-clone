import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import Welcome from './pages/Welcome';
import Movie from './pages/Movie';

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route exact path='/' component={Welcome} />
					<Route exact path='/home' component={Home} />
					<Route exact path='/movie/:id' component={Movie} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
