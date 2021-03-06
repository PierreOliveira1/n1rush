import styled from 'styled-components';
import { AnimationModal } from './animations';

export const ContainerModal = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba(8, 65, 84, 0.62);
	z-index: 99;
`;

export const ContentModal = styled.div<{
	display?: string;
	justifyContent?: string;
	alignItems?: string;
	flexDirection?: string;
}>`
	width: 400px;
	height: 500px;
	display: ${({ display }) => display || 'block'};
	justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
	align-items: ${({ alignItems }) => alignItems || 'flex-start'};
	flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
	position: relative;
	background-color: white;
	border-radius: 5px;
	z-index: 7;
	animation: both 200ms ${AnimationModal};

	@media (max-width: 700px) {
		width: 344px;
	}

	@media (max-width: 350px) {
		width: 300px;
	}
`;
