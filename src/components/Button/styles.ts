import styled, { Keyframes } from 'styled-components';

export const ButtonIcon = styled.a<{
	width?: string;
	height?: string;
	display?: string;
	justifyContent?: string;
	alignItems?: string;
	position?: string;
	top?: string;
	left?: string;
	right?: string;
	marginBottom?: string;
	animationName?: Keyframes;
	animationDuration?: string;
	animationDelay?: string;
	animationFillMode?: string;
}>`
	width: ${({ width }) => width || 'auto'};
	height: ${({ height }) => height || 'auto'};
	cursor: pointer;
	background: none;
	border: none;
	outline: none;
	display: ${({ display }) => display || 'flex'};
	justify-content: ${({ justifyContent }) => justifyContent || 'center'};
	align-items: ${({ alignItems }) => alignItems || 'center'};
	position: ${({ position }) => position || 'initial'};
	top: ${({ top }) => top || 'none'};
	left: ${({ left }) => left || 'none'};
	right: ${({ right }) => right || 'none'};
	margin-bottom: ${({ marginBottom }) => marginBottom || '0px'};
	animation-name: ${({ animationName }) => animationName || 'none'};
	animation-duration: ${({ animationDuration }) => animationDuration || '0ms'};
	animation-delay: ${({ animationDelay }) => animationDelay || '0ms'};
	animation-fill-mode: ${({ animationFillMode }) =>
		animationFillMode || 'none'};
	text-decoration: none;
`;

export const Icon = styled.img<{
	width?: string;
	height?: string;
	fill?: string;
}>`
	width: ${({ width }) => width || 'auto'};
	height: ${({ height }) => height || 'auto'};
	fill: ${({ fill }) => fill || '#000000'};
`;

export const ButtonContent = styled.a<{
	width?: string;
	height?: string;
	justifyContent?: string;
	background?: string;
	backgroundHover?: string;
	marginTop?: string;
	marginBottom?: string;
	paddingLeft?: string;
	animationName?: Keyframes;
	animationDuration?: string;
	animationDelay?: string;
	animationFillMode?: string;
}>`
	width: ${({ width }) => width || '100%'};
	height: ${({ height }) => height || '30px'};
	display: flex;
	justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
	align-items: center;
	padding-left: ${({ paddingLeft }) => paddingLeft || '10px'};
	margin-top: ${({ marginTop }) => marginTop || '0px'};
	margin-bottom: ${({ marginBottom }) => marginBottom || '0px'};
	border-radius: 5px;
	transition: background 500ms;
	background: ${({ background }) => background || 'none'};
	cursor: pointer;
	outline: none;
	border: none;
	animation-name: ${({ animationName }) => animationName || 'none'};
	animation-duration: ${({ animationDuration }) => animationDuration || '0ms'};
	animation-delay: ${({ animationDelay }) => animationDelay || '0ms'};
	animation-fill-mode: ${({ animationFillMode }) =>
		animationFillMode || 'none'};

	&:hover {
		background-color: ${({ backgroundHover }) => backgroundHover || '#3ec6e0'};
	}
`;
