import styled, { Keyframes } from 'styled-components';

export const Li = styled.li<{
	width?: string;
	display?: string;
	animationName?: Keyframes;
	animationDuration?: string;
	animationDelay?: string;
	animationFillMode?: string;
}>`
	width: ${({ width }) => width || 'auto'};
	display: ${({ display }) => display || 'block'};
	animation-name: ${({ animationName }) => animationName || 'none'};
	animation-duration: ${({ animationDuration }) => animationDuration || '0ms'};
	animation-delay: ${({ animationDelay }) => animationDelay || '0ms'};
	animation-fill-mode: ${({ animationFillMode }) =>
		animationFillMode || 'none'};
`;

export const Price = styled.div`
	width: auto;
	display: flex;

	@media (min-width: 701px) {
		margin-bottom: 3rem;
	}
`;
