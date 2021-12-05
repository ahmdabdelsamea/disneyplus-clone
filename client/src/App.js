import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import Header from './components/Header';

// pages
import Home from './pages/Home';
import Welcome from './pages/Welcome';
import Movie from './pages/Movie';

function App() {
	return (
		<div className='App'>
			<Router>
				{/* <Header /> */}
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
