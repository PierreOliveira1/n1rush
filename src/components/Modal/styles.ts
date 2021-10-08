import styled from 'styled-components';

export const ContainerModal = styled.div`
	width: 100vw;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	background-color: #0841549e;
	opacity: 0.62;
	z-index: 6;
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
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: white;
	border-radius: 5px;
	z-index: 7;

	@media (max-width: 700px) {
		width: 344px;
	}

	@media (max-width: 350px) {
		width: 300px;
	}
`;
