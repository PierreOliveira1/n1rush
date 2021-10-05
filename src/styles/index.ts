import styled from 'styled-components';

export const Container = styled.div<{
	display?: string;
	justifyContent?: string;
	alignItems?: string;
	backgroundColor?: string;
}>`
	width: 100vw;
	height: 100vh;
	display: ${({ display }) => display || 'flex'};
	justify-content: ${({ justifyContent }) => justifyContent || 'center'};
	align-items: ${({ alignItems }) => alignItems || 'center'};
	background-color: ${({ backgroundColor }) => backgroundColor || 'white'};
`;
