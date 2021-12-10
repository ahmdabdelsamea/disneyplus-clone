import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	moviesList: [],
};

const movieSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		addMovies: (state, { payload }) => {
			state.movies = payload;
		},
	},
});

export const { addMovies } = movieSlice.actions;

export const getAllMovies = (state) => {
	return state.movies.moviesList;
};

export default movieSlice.reducer;
