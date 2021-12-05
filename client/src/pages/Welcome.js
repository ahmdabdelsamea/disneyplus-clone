import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// assets
import welcomeBg from '../assets/images/login-background.jpg';
import logoOne from '../assets/images/cta-logo-one.svg';
import logoTwo from '../assets/images/cta-logo-two.png';

const Welcome = () => {
	return (
		<Container>
			<Content>
				<CTA>
					<CTALogoOne src={logoOne} alt='' />
					<GoHome to='/home'> Get all there </GoHome>
					<Description>
						Get Premier Access to Raya and the Last Dragon for an additional fee
						with a Disney+ subscription. As of 12/12/2021, the price of Disney+
						and The Disney Bundle will increase by $1
					</Description>
					<CTALogoTwo src={logoTwo} alt='' />
				</CTA>
				<BgImage />
			</Content>
		</Container>
	);
};

const Container = styled.section`
	overflow: hidden;
	display: flex;
	text-align: center;
	height: 100vh;
`;

const Content = styled.div`
	margin-bottom: 10vw;
	width: 100%;
	position: relative;
	min-height: 100vh;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 80px 40px;
	height: 100%;
`;

const BgImage = styled.div`
	background-image: url(${welcomeBg});
	height: 100%;
	background-position: top;
	background-size: cover;
	background-repeat: no-repeat;
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	opacity: 0.8;
	z-index: -1;
`;

const CTA = styled.div`
	margin-bottom: 2vw;
	max-width: 600px;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin-top: 0;
	margin-left: 0;
	margin-right: 0;

	transition-timing-function: ease-out;
	transition: opacity 0.2s;
	width: 100%;
`;

const CTALogoOne = styled.img`
	margin-bottom: 12px;
	max-width: 600px;
	min-height: 1px;
	display: block;
	width: 100%;
`;

const GoHome = styled(Link)`
	width: 100%;
	padding: 18px 0;
	margin-bottom: 12px;
	background-color: #0063e5;
	border-radius: 4px;
	cursor: pointer;
	font-size: 18px;
	letter-spacing: 1.5px;
	font-weight: bold;
	text-transform: uppercase;
	color: #f9f9f9;

	&:hover {
		background-color: #0483ee;
	}
`;

const Description = styled.p`
	color: hsla(0, 0%, 95%, 1);
	font-size: 14px;
	margin: 0 0 24px;
	line-height: 1.5;
	letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
	margin-bottom: 20px;
	max-width: 600px;
	display: inline-block;
	vertical-align: bottom;
	width: 100%;
`;

export default Welcome;
