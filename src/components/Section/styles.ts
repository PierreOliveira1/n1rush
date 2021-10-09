import styled from 'styled-components';

export const Products = styled.div`
	width: 65%;
	display: flex;
	flex-direction: column;
	margin-top: 3rem;

	@media (max-width: 1400px) {
		width: 73%;
	}

	@media (max-width: 1300px) {
		width: 85%;
	}

	@media (max-width: 1000px) {
		width: 80%;
	}
`;

export const Options = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

export const Button = styled.a<{
	display?: string;
	justifyContent?: string;
	paddingLeft?: string;
	backgroundColor?: string;
}>`
	display: ${({ display }) => display || 'flex'};
	justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
	align-items: center;
	padding-left: ${({ paddingLeft }) => paddingLeft || '0px'};
	width: 240px;
	height: 52px;
	background-color: ${({ backgroundColor }) => backgroundColor || '#3ec6e0'};
	text-decoration: none;
	border-radius: 5px;
	outline: none;
	border: none;
	cursor: pointer;

	@media (max-width: 700px) {
		width: 160px;
		height: 35px;
	}
`;
