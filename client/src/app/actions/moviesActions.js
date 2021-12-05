import axios from 'axios';
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

export const getPosters = () => async (dispatch) => {
	try {
		dispatch({ type: GET_POSTERS_REQUEST });

		const { data } = await axios.get(
			'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=654d5c3de505c956681a5bd0cdad6c9c'
		);
		const { results } = data;

		dispatch({ type: GET_POSTERS_SUCCESS, payload: results });
	} catch (error) {
		dispatch({
			type: GET_POSTERS_FAILURE,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const getMovies = () => async (dispatch) => {
	try {
		dispatch({ type: GET_MOVIES_REQUEST });

		const { data } = await axios.get(
			'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=654d5c3de505c956681a5bd0cdad6c9c&page=2'
		);
		const { results } = data;

		dispatch({ type: GET_MOVIES_SUCCESS, payload: results });
	} catch (error) {
		dispatch({
			type: GET_MOVIES_FAILURE,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const getMovieDetails = (id) => async (dispatch) => {
	try {
		dispatch({ type: MOVIE_DETAILS_REQUEST });

		const { data } = await axios.get(
			`https://api.themoviedb.org/3/movie/${id}?api_key=654d5c3de505c956681a5bd0cdad6c9c`
		);

		dispatch({ type: MOVIE_DETAILS_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: MOVIE_DETAILS_FAILURE,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
