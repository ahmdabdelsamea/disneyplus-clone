import React, { useEffect } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getPosters } from '../app/actions/moviesActions';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const ImgSlider = () => {
	const dispatch = useDispatch();

	const moviePosters = useSelector((state) => state.moviePosters);
	const { loading, error, posters } = moviePosters;

	useEffect(() => {
		dispatch(getPosters());
	}, [dispatch]);

	let settings = {
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		variableWidth: true,
	};

	return (
		<>
			{loading ? (
				<h2>loading...</h2>
			) : error ? (
				<h2>{error}</h2>
			) : (
				<Carousel {...settings}>
					{posters.map((poster) => {
						return (
							<Wrap>
								<Link key={poster.id} to={`/movie/${poster.id}`}>
									<img
										src={`${IMG_URL}${poster.backdrop_path}`}
										alt={poster.title}
									/>
								</Link>
							</Wrap>
						);
					})}
				</Carousel>
			)}
		</>
	);
};

const Carousel = styled(Slider)`
	& > button {
		opacity: 0;
		height: 100%;
		width: 5vw;
		z-index: 1;

		&:hover {
			opacity: 1;
			transition: opacity 0.2s ease 0s;
		}
	}

	ul li button {
		&:before {
			font-size: 10px;
			color: rgb(150, 158, 171);
		}
	}

	li.slick-active button:before {
		color: white;
	}

	.slick-list {
		display: block;
		overflow: initial;
	}

	.slick-track {
		display: block;
	}

	.slick-prev {
		margin-left: -30px;
	}

	.slick-next {
		margin-right: -30px;
	}
`;

const Wrap = styled.div`
	border-radius: 4px;
	position: relative;
	cursor: pointer;
	margin: 20px 0;

	a {
		height: auto;
		border-radius: 10px;
		box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
			rgb(0 0 0 / 73%) 0px 16px 10px -10px;
		cursor: pointer;
		display: block;
		position: relative;
		padding: 4px;
		transition: 0.5s ease;

		img {
			height: 20vw;
			max-width: 100%;
			background-size: cover;
			border-radius: 10px;

			@media (max-width: 768px) {
				height: 30vw;
			}
		}

		&:hover {
			transform: translateY(-10px);
		}
	}
`;

export default ImgSlider;
