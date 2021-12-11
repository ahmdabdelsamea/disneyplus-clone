import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getMovies } from '../app/actions/moviesActions';
import ImgSlider from '../components/ImgSlider';
import Viewers from '../components/Viewers';

import homeBg from '../assets/images/home-background.png';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const Home = () => {
	const dispatch = useDispatch();

	const disneyMovies = useSelector((state) => state.disneyMovies);
	const { loading, error, movies } = disneyMovies;

	useEffect(() => {
		dispatch(getMovies());
	}, [dispatch]);

	return (
		<Container>
			{loading ? (
				<h2>loading...</h2>
			) : error ? (
				<h2>{error}</h2>
			) : (
				<>
					<ImgSlider />
					<Viewers />
					<h2>Popular Now</h2>
					<Content>
						{movies.map((movie) => {
							return (
								<Wrap key={movie.id}>
									<Link to={`/movie/${movie.id}`}>
										<img
											src={`${IMG_URL}${movie.backdrop_path}`}
											alt={movie.title}
										/>
									</Link>
								</Wrap>
							);
						})}
					</Content>
				</>
			)}
		</Container>
	);
};

const Container = styled.main`
	width: 100vw;
	height: 100vh;
	overflow-y: scroll;

	min-height: calc(100vh - 250px);
	overflow-x: hidden;
	display: block;
	top: 72px;
	padding: 0 calc(3.5vw + 5px);

	&:after {
		background: url(${homeBg}) center center / cover no-repeat fixed;
		content: '';
		position: absolute;
		inset: 0px;
		opacity: 1;
		z-index: -1;
	}
`;

const Content = styled.div`
	padding: 0 0 26px;
	display: grid;
	grid-gap: 25px;
	gap: 25px;
	grid-template-columns: repeat(4, minmax(0, 1fr));

	@media (max-width: 768px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
`;

const Wrap = styled.div`
	padding-top: 56%;
	border-radius: 10px;
	cursor: pointer;
	overflow: hidden;
	position: relative;

	border: 3px solid rgba(249, 249, 249, 0.1);
	box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
		rgb(0 0 0 / 73%) 0px 16px 10px -10px;
	transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

	img {
		position: absolute;
		display: block;
		object-fit: cover;
		inset: 0px;
		height: 100%;
		width: 100%;
		opacity: 1;
		z-index: 1;
		transition: opacity 500ms ease-in-out 0s;
		top: 0;
	}

	&:hover {
		box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
			rgb(0 0 0 / 72%) 0px 30px 22px -10px;
		transform: scale(1.05);
		border-color: rgba(249, 249, 249, 0.8);
	}
`;

export default Home;
