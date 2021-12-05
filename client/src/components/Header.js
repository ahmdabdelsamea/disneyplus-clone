import React from 'react';
import styled from 'styled-components';

// authentication
// import { login, logout } from '../app/actions/userActions';
// import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';

// assets
import logo from '../assets/images/logo.svg';
import homeIcon from '../assets/images/home-icon.svg';
import searchIcon from '../assets/images/search-icon.svg';
import watchlistIcon from '../assets/images/watchlist-icon.svg';
import originalIcon from '../assets/images/original-icon.svg';
import movieIcon from '../assets/images/movie-icon.svg';
import seriesIcon from '../assets/images/series-icon.svg';

const Header = () => {
	// const history = useHistory();
	// const dispatch = useDispatch();

	// const userLogin = useSelector((state) => state.userLogin);
	// const { loading, error, userInfo } = userLogin;

	// const handleAuth = () => {
	// 	console.log('Login');
	// 	dispatch(login(history));
	// };

	// const handleLogout = () => {
	// 	console.log('Logout');
	// 	dispatch(logout(history));
	// };

	// useEffect(() => {
	// 	if (userInfo) {
	// 		history.push('/home');
	// 	} else {
	// 		history.push('/');
	// 	}
	// }, [userInfo]);

	return (
		<Nav>
			<Logo>
				<img src={logo} alt='Disney+' />
			</Logo>
			{/* {!userInfo ? (
				<Login onClick={handleAuth}>Login</Login>
			) : ( */}
			<>
				<NavMenu>
					<a href='/home'>
						<img src={homeIcon} alt='Home' />
						<span>Home</span>
					</a>
					<a href='/search'>
						<img src={searchIcon} alt='search' />
						<span>Search</span>
					</a>
					<a href='/watchlist'>
						<img src={watchlistIcon} alt='watchlist' />
						<span>Watchlist</span>
					</a>
					<a href='/original'>
						<img src={originalIcon} alt='original' />
						<span>Originals</span>
					</a>
					<a href='/movie'>
						<img src={movieIcon} alt='movie' />
						<span>Movies</span>
					</a>
					<a href='/series'>
						<img src={seriesIcon} alt='series' />
						<span>Series</span>
					</a>
				</NavMenu>
				{/* <Logout>
					<UserImg src={userInfo.photoURL} alt={userInfo.displayName} />
					<Dropdown>
						<span onClick={handleLogout}>Logout</span>
					</Dropdown>
				</Logout> */}
			</>
			{/* )} */}
		</Nav>
	);
};

const Nav = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 70px;
	background-color: #090b13;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 36px;
	letter-spacing: 16px;
	z-index: 10;
`;

const Logo = styled.a`
	padding: 0;
	width: 80px;
	margin-top: 4px;
	max-height: 70px;
	font-size: 0;
	display: inline-block;

	img {
		display: block;
		width: 100%;
	}
`;

const NavMenu = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-flow: row nowrap;
	height: 100%;
	margin: 0;
	padding: 0;
	position: relative;
	margin-right: auto;
	margin-left: 25px;

	a {
		display: flex;
		align-items: center;
		justify-content: center;

		padding: 0 12px;

		img {
			height: 20px;
			width: 20px;
			min-width: 20px;
			z-index: auto;
		}

		span {
			color: rgb(249, 249, 249);
			font-size: 14px;
			letter-spacing: 1.4px;
			line-height: 1.1;
			padding: 2px 0;
			white-space: nowrap;
			position: relative;
			text-transform: uppercase;

			&:before {
				content: '';
				background-color: rgb(249, 249, 249);
				border-radius: 0 0 4px 4px;
				bottom: -6px;
				height: 2px;
				left: 0px;
				right: 0px;
				opacity: 0;
				position: absolute;
				transform-origin: left center;
				transform: scaleX(0);
				transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
				visibility: hidden;
				width: auto;
			}
		}

		&:hover {
			span:before {
				transform: scaleX(1);
				visibility: visible;
				opacity: 1 !important;
			}
		}
	}

	@media (max-width: 768px) {
		display: none;
	}
`;

const Login = styled.a`
	background-color: rgba(0, 0, 0, 0.6);
	padding: 8px 16px;
	text-transform: uppercase;
	letter-spacing: 1.5px;
	border: 1px solid #f9f9f9;
	border-radius: 4px;
	cursor: pointer;
	transition: all 0.2s ease 0s;

	&:hover {
		background-color: #f9f9f9;
		color: rgba(0, 0, 0);
		border-color: transparent;
	}
`;

const UserImg = styled.img`
	height: 100%;
	width: 100%;
	border-radius: 50%;
`;

const Dropdown = styled.div`
	position: absolute;
	top: 48px;
	right: 0;
	background: rgb(19, 19, 19);
	border: 1px solid rgba(151, 151, 151, 0.4);
	border-radius: 4px;
	box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
	padding: 10px;
	font-size: 14px;
	letter-spacing: 3px;
	width: 100px;
	cursor: pointer;
	opacity: 0;
`;

const Logout = styled.div`
	position: relative;
	height: 40px;
	width: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;

	&:hover {
		${Dropdown} {
			display: block;
			opacity: 1;
		}
	}
`;

export default Header;
