import styled from 'styled-components';
import {
	menuOpen,
	menuClose,
	triangleOpen,
	triangleClose,
	menuOpenMobile,
	menuCloseMobile,
} from './animations';

export const Content = styled.div`
	width: 65%;
	height: 35px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: absolute;
	top: 5%;
	z-index: 2;

	@media (max-width: 1200px) {
		width: 80%;
	}

	@media (max-width: 1000px) {
		width: 90%;
	}

	@media (max-width: 900px) {
		width: 100%;
		padding: 0px 4%;
	}

	@media (max-width: 500px) and (min-width: 300px) {
		top: 2%;
	}
`;

export const SpaceOne = styled.div`
	width: 30%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;

	@media (max-width: 800px) {
		width: 30%;
	}

	@media (max-width: 700px) and (min-width: 601px) {
		width: 35%;
	}

	@media (max-width: 600px) and (min-width: 401px) {
		width: 40%;
	}

	@media (max-width: 400px) and (min-width: 300px) {
		width: 45%;
	}
`;

export const SpaceTwo = styled.div`
	width: 40%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;

	@media (max-width: 800px) {
		width: 20%;
	}

	@media (max-width: 700px) and (min-width: 401px) {
		width: 30%;
	}

	@media (max-width: 400px) and (min-width: 300px) {
		width: 40%;
	}
`;

export const ContainerMenu = styled.div`
	display: none;
	position: absolute;
	top: 14%;
	left: 16%;
	z-index: 1;

	@media (max-width: 1200px) {
		left: 8.5%;
	}

	@media (max-width: 1000px) {
		left: 3%;
	}

	@media (max-width: 900px) {
		left: 2%;
	}

	@media (max-width: 700px) {
		top: 0;
		left: 0;
	}
`;

export const ContentMenu = styled.div<{
	animation?: boolean;
}>`
	width: 33rem;
	height: 250px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #084154;
	border: none;
	border-radius: 5px;
	box-shadow: none;
	animation-name: ${({ animation }) =>
		animation ? menuOpen : menuClose || 'none'};
	animation-duration: 300ms;
	animation-fill-mode: both;
	animation-timing-function: linear;
	animation-delay: ${({ animation }) => (animation ? '0ms' : '400ms')};

	@media (max-width: 700px) {
		width: 100vw;
		height: 100vh;
		border: none;
		box-shadow: none;
		border-radius: 0px;
		animation-name: ${({ animation }) =>
			animation ? menuOpenMobile : menuCloseMobile || 'none'};
	}
`;

export const BoxMenu = styled.div`
	width: 90%;
	display: flex;

	@media (max-width: 700px) {
		flex-direction: column;
	}
`;

export const Triangle = styled.div<{
	animation?: boolean;
}>`
	position: absolute;
	left: 3%;
	top: -6%;
	z-index: -1;
	width: 0;
	height: 0;
	animation-name: ${({ animation }) =>
		animation ? triangleOpen : triangleClose};
	animation-duration: 400ms;
	animation-delay: ${({ animation }) => (animation ? '0ms' : '300ms')};
	border-left: 16.37px solid transparent;
	border-right: 16.37px solid transparent;
	border-bottom: 16.37px solid #3ec6e0;
`;

export const Form = styled.form`
	width: 80%;
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-bottom: 5%;
`;

export const Input = styled.input<{
	width?: string;
	height?: string;
	border?: string;
	borderRadius?: string;
	placeholderColor?: string;
	paddingLeft?: string;
	marginTop?: string;
}>`
	width: ${({ width }) => width || '90%'};
	height: ${({ height }) => height || '35px'};
	outline: none;
	border: ${({ border }) => border || 'none'};
	border-radius: ${({ borderRadius }) => borderRadius || 'none'};
	padding-left: ${({ paddingLeft }) => paddingLeft || '0'};
	margin-top: ${({ marginTop }) => marginTop || '0'};
	background: none;
	font-family: 'Roboto', sans-serif;

	&::placeholder {
		color: ${({ placeholderColor }) => placeholderColor || '#343434'};
	}
`;

export const Textarea = styled.textarea`
	width: 100%;
	height: 12rem;
	outline: none;
	border: 2px solid #343434;
	border-radius: 10px;
	padding: 2%;
	margin-top: 2%;

	&::placeholder {
		color: #343434;
	}
`;
