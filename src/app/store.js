import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {
	disneyMoviesReducer,
	movieDetailsReducer,
	moviePostersReducer,
} from './reducers/moviesReducers';

const reducer = combineReducers({
	moviePosters: moviePostersReducer,
	disneyMovies: disneyMoviesReducer,
	movieDetails: movieDetailsReducer,
});

const initialState = {
	moviePosters: { posters: [] },
	disneyMovies: { movies: [] },
	movieDetails: { movie: {} },
};

const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
