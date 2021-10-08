import { keyframes } from 'styled-components';

export const menuOpen = keyframes`
	0% {
		height: 0px;
		border: none;
	}
	50% {
		height: 250px;
		box-shadow: none;
	}
	100% {
		box-shadow: 10px 10px 0px #3ec6e0;
		border: 2px solid #3ec6e0;
	}
`;

export const menuClose = keyframes`
	0% {
		height: 250px;
		border: 2px solid #3ec6e0;
		box-shadow: 10px 10px 0px #3ec6e0;
	}
	50% {
		box-shadow: none;
	}
	100% {
		height: 0px;
		border: none;
	}
`;

export const menuOpenMobile = keyframes`
	0% {
		width: 0px;
	}
	100% {
		width: 100vw;
	}
`;

export const menuCloseMobile = keyframes`
	0% {
		width: 100vw;
	}
	100% {
		width: 0px;
	}
`;

export const textAnimationOpen = keyframes`
	from {
		transform: translateX(-20%);
		opacity: 0;
	}
	to {
		transform: translateX(0);
		opacity: 1;
	}
`;

export const textAnimationClose = keyframes`
	from {
		transform: translateX(0);
		opacity: 1;
	}
	to {
		transform: translateX(-20%);
		opacity: 0;
	}
`;

export const triangleOpen = keyframes`
	from {
		transform: translateY(100%);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
`;

export const triangleClose = keyframes`
	from {
		transform: translateY(0);
		opacity: 1;
	}
	to {
		transform: translateY(100%);
		opacity: 0;
	}
`;

export const inputOpen = keyframes`
	from {
		width: 0;
		padding-left: 0;
		padding-right: 0;
	}
	to {
		width: 100%;
		padding-left: 1rem;
		padding-right: .3rem;
	}
`;

export const inputClose = keyframes`
	from {
		width: 100%;
		padding-left: 1rem;
		padding-right: .3rem;
	}
	to {
		width: 0;
		padding-left: 0;
		padding-right: 0;
	}
`;
