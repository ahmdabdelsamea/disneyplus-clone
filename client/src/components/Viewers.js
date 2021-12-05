import React from 'react';
import styled from 'styled-components';

import viewDisney from '../assets/images/viewers-disney.png';
import viewMarvel from '../assets/images/viewers-marvel.png';
import viewNational from '../assets/images/viewers-national.png';
import viewPixar from '../assets/images/viewers-pixar.png';
import viewStar from '../assets/images/viewers-starwars.png';

import videoDisney from '../assets/videos/1564674844-disney.mp4';
import videoMarvel from '../assets/videos/1564676115-marvel.mp4';
import videoNational from '../assets/videos/1564676296-national-geographic.mp4';
import videoPixar from '../assets/videos/1564676714-pixar.mp4';
import videoStar from '../assets/videos/1608229455-star-wars.mp4';

const Viewers = () => {
	return (
		<Container>
			<Wrap>
				<img src={viewDisney} alt='Disney' />
				<video autoPlay={true} loop={true} playsInline={true}>
					<source src={videoDisney} type='video/mp4' />
				</video>
			</Wrap>
			<Wrap>
				<img src={viewMarvel} alt='Marvel' />
				<video autoPlay={true} loop={true} playsInline={true}>
					<source src={videoMarvel} type='video/mp4' />
				</video>
			</Wrap>
			<Wrap>
				<img src={viewNational} alt='National' />
				<video autoPlay={true} loop={true} playsInline={true}>
					<source src={videoNational} type='video/mp4' />
				</video>
			</Wrap>
			<Wrap>
				<img src={viewPixar} alt='Pixar' />
				<video autoPlay={true} loop={true} playsInline={true}>
					<source src={videoPixar} type='video/mp4' />
				</video>
			</Wrap>
			<Wrap>
				<img src={viewStar} alt='Star' />
				<video autoPlay={true} loop={true} playsInline={true}>
					<source src={videoStar} type='video/mp4' />
				</video>
			</Wrap>
		</Container>
	);
};

const Container = styled.div`
	padding: 30px 0px 26px;
	display: grid;
	grid-gap: 25px;
	grid-template-columns: repeat(5, minmax(0, 1fr));

	@media (max-width: 768px) {
		grid-template-columns: repeat(1, minmax(0, 1fr));
	}
`;

const Wrap = styled.div`
	padding-top: 55%;
	border-radius: 10px;
	cursor: none;
	overflow: hidden;
	position: relative;
	border: 3px solid rgba(249, 249, 249, 0.1);
	box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
		rgb(0 0 0 / 73%) 0px 16px 10px -10px;
	transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

	img {
		inset: 0px;
		display: block;
		height: 100%;
		object-fit: cover;
		opacity: 1;
		position: absolute;
		transition: opacity 500ms ease-in-out 0s;
		width: 100%;
		z-index: 1;
		top: 0;
	}

	video {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0px;
		opacity: 0;
		z-index: 0;
	}

	&:hover {
		box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
			rgb(0 0 0 / 72%) 0px 30px 22px -10px;

		transform: scale(1.05);
		border-color: rgba(249, 249, 249, 0.8);

		video {
			opacity: 1;
		}
	}
`;

export default Viewers;
