import {
	GET_MOVIES_REQUEST,
	GET_MOVIES_SUCCESS,
	GET_MOVIES_FAILURE,
	MOVIE_DETAILS_REQUEST,
	MOVIE_DETAILS_SUCCESS,
	MOVIE_DETAILS_FAILURE,
	GET_POSTERS_REQUEST,
	GET_POSTERS_SUCCESS,
	GET_POSTERS_FAILURE,
} from '../constants/moviesConstants';

export const moviePostersReducer = (state = { posters: [] }, action) => {
	switch (action.type) {
		case GET_POSTERS_REQUEST:
			return { loading: true };
		case GET_POSTERS_SUCCESS:
			return { loading: false, posters: action.payload };
		case GET_POSTERS_FAILURE:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const disneyMoviesReducer = (state = { movies: [] }, action) => {
	switch (action.type) {
		case GET_MOVIES_REQUEST:
			return { loading: true };
		case GET_MOVIES_SUCCESS:
			return { loading: false, movies: action.payload };
		case GET_MOVIES_FAILURE:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const movieDetailsReducer = (state = { movie: {} }, action) => {
	switch (action.type) {
		case MOVIE_DETAILS_REQUEST:
			return { loading: true };
		case MOVIE_DETAILS_SUCCESS:
			return { loading: false, movie: action.payload };
		case MOVIE_DETAILS_FAILURE:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
