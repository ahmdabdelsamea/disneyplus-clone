import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getMovieDetails } from '../app/actions/moviesActions';
const IMG_URL = 'https://image.tmdb.org/t/p/original';

const Movie = () => {
	const { id } = useParams();
	const dispatch = useDispatch();

	const movieDetails = useSelector((state) => state.movieDetails);
	const { loading, error, movie } = movieDetails;

	useEffect(() => {
		dispatch(getMovieDetails(id));
	}, [id, dispatch]);

	return (
		<Container>
			{loading ? (
				<h2>loading...</h2>
			) : error ? (
				<h2>{error}</h2>
			) : (
				<>
					<Background>
						<img src={`${IMG_URL}${movie.backdrop_path}`} alt='' />
					</Background>

					<Content>
						<img src={`${IMG_URL}${movie.poster_path}`} alt='' />
						<Wrap>
							<div>
								<h1>{movie.original_title}</h1>
								<Tagline>{movie.tagline}</Tagline>
								{/* <p>{movie.vote_average}</p> */}
								<Overview>
									<h3>Overview</h3>
									<p>{movie.overview}</p>
								</Overview>
							</div>
							<Button>
								<a href={movie.homepage} target='_blank' rel='noreferrer'>
									Watch
								</a>
							</Button>
						</Wrap>
					</Content>
				</>
			)}
		</Container>
	);
};

const Container = styled.div`
	min-height: calc(100vh - 250px);
	overflow-x: hidden;
	display: block;
	top: 72px;
	padding: 0 calc(5vw + 5px);
	height: 100vh;
	background-image: linear-gradient(
		to top,
		rgba(0, 0, 0, 1),
		rgba(0, 0, 0, 0.6)
	);
`;

const Background = styled.div`
	left: 0px;
	right: 0px;
	top: 0px;
	position: fixed;
	z-index: -1;

	img {
		height: 100vh;
		width: 100%;
		position: relative;

		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;

		@media (max-width: 768px) {
			width: initial;
		}
	}
`;

const Content = styled.div`
	display: flex;
	margin: 60px auto;
	min-height: 170px;
	padding-bottom: 24px;
	width: 100%;

	img {
		height: 40vw;
		border-radius: 10px;

		box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
			rgb(0 0 0 / 73%) 0px 16px 10px -10px;
		transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
	}

	@media (max-width: 768px) {
		flex-direction: column;

		img {
			height: 100%;
		}
	}
`;

const Wrap = styled.div`
	padding: 0 30px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	max-width: 500px;

	h1 {
		margin: 0;
	}

	p {
		margin: 0;
	}

	@media (max-width: 768px) {
		padding: 20px 0;
		max-width: 100%;
	}
`;

const Tagline = styled.p`
	font-size: 1rem;
	font-weight: normal;
	text-transform: uppercase;
	letter-spacing: 1.5px;
`;

const Overview = styled.div`
	margin: 1.6rem 0;
	h3 {
		margin: 0;
		font-size: 1.2rem;
		font-weight: normal;
		text-transform: uppercase;
		letter-spacing: 1.5px;
		margin: 5px 0;
	}

	p {
		font-size: 1rem;
		letter-spacing: 1.5px;
	}
`;

const Button = styled.div`
	font-size: 1rem;
	font-weight: bold;
	padding: 14px 24px;
	border-radius: 4px;
	text-align: center;
	text-transform: uppercase;
	border: none;
	background: rgb(249, 249, 249);
	letter-spacing: 1.5px;
	cursor: pointer;

	a {
		color: #000;
	}

	&:hover {
		background: rgb(198, 198, 198);
	}
`;

export default Movie;
