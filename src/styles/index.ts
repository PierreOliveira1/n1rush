import styled, { Keyframes } from 'styled-components';

export const Container = styled.div<{
	display?: string;
	justifyContent?: string;
	alignItems?: string;
	backgroundColor?: string;
}>`
	width: 100%;
	height: 100vh;
	display: ${({ display }) => display || 'flex'};
	justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
	align-items: ${({ alignItems }) => alignItems || 'flex-start'};
	flex-direction: column;
	background-color: ${({ backgroundColor }) => backgroundColor || 'white'};
`;

export const Box = styled.div<{
	width?: string;
	height?: string;
	display?: string;
	justifyContent?: string;
	alignItems?: string;
	alignContent?: string;
	flexDirection?: string;
	position?: string;
	top?: string;
	bottom?: string;
	left?: string;
	right?: string;
	borderRadius?: string;
	backgroundColor?: string;
	marginTop?: string;
	marginBottom?: string;
	marginLeft?: string;
	marginRight?: string;
	paddingTop?: string;
	paddingLeft?: string;
	paddingRight?: string;
	border?: string;
	borderTop?: string;
	animationName?: Keyframes;
	animationDuration?: string;
	animationDelay?: string;
	animationFillMode?: string;
	animationDirection?: string;
	zIndex?: string;
	opacity?: string;
	boxShadow?: string;
}>`
	width: ${({ width }) => width || 'auto'};
	height: ${({ height }) => height || 'auto'};
	display: ${({ display }) => display || 'block'};
	justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
	align-items: ${({ alignItems }) => alignItems || 'flex-start'};
	align-content: ${({ alignContent }) => alignContent || 'flex-start'};
	flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
	position: ${({ position }) => position || 'initial'};
	top: ${({ top }) => top || 'none'};
	bottom: ${({ bottom }) => bottom || 'none'};
	left: ${({ left }) => left || 'none'};
	right: ${({ right }) => right || 'none'};
	border-radius: ${({ borderRadius }) => borderRadius || '0px'};
	background-color: ${({ backgroundColor }) => backgroundColor || 'none'};
	padding-top: ${({ paddingTop }) => paddingTop || '0px'};
	padding-left: ${({ paddingLeft }) => paddingLeft || '0px'};
	padding-right: ${({ paddingRight }) => paddingRight || '0px'};
	margin-top: ${({ marginTop }) => marginTop || '0px'};
	margin-bottom: ${({ marginBottom }) => marginBottom || '0px'};
	margin-left: ${({ marginLeft }) => marginLeft || '0px'};
	margin-right: ${({ marginRight }) => marginRight || '0px'};
	border: ${({ border }) => border || 'none'};
	border-top: ${({ borderTop }) => borderTop || 'none'};
	animation-name: ${({ animationName }) => animationName || 'none'};
	animation-duration: ${({ animationDuration }) => animationDuration || '0ms'};
	animation-delay: ${({ animationDelay }) => animationDelay || '0ms'};
	animation-fill-mode: ${({ animationFillMode }) =>
		animationFillMode || 'none'};
	animation-direction: ${({ animationDirection }) =>
		animationDirection || 'normal'};
	z-index: ${({ zIndex }) => zIndex || 'none'};
	opacity: ${({ opacity }) => opacity || '1'};
	box-shadow: ${({ boxShadow }) => boxShadow || 'none'};
`;

export const Text = styled.p<{
	fontSize?: string;
	fontFamily?: string;
	color?: string;
	weight?: string;
	marginTop?: string;
	marginBottom?: string;
	marginLeft?: string;
	textAlign?: string;
	rotate?: string;
	animationName?: Keyframes;
	animationDuration?: string;
	animationDelay?: string;
	animationFillMode?: string;
	animationDirection?: string;
	writingMode?: string;
	textOrientation?: string;
	lineHeight?: string;
}>`
	font-family: ${({ fontFamily }) => fontFamily || 'Roboto, sans-serif'};
	font-size: ${({ fontSize }) => fontSize || '14px'};
	font-weight: ${({ weight }) => weight || '400'};
	color: ${({ color }) => color || '#FFFFFF'};
	text-align: ${({ textAlign }) => textAlign || 'initial'};
	margin-top: ${({ marginTop }) => marginTop || '0px'};
	margin-bottom: ${({ marginBottom }) => marginBottom || '0px'};
	margin-left: ${({ marginLeft }) => marginLeft || '0px'};
	transform: rotate(${({ rotate }) => rotate || '0deg'});
	animation-name: ${({ animationName }) => animationName || 'none'};
	animation-duration: ${({ animationDuration }) => animationDuration || '0ms'};
	animation-delay: ${({ animationDelay }) => animationDelay || '0ms'};
	animation-fill-mode: ${({ animationFillMode }) =>
		animationFillMode || 'none'};
	animation-direction: ${({ animationDirection }) =>
		animationDirection || 'normal'};
	writing-mode: ${({ writingMode }) => writingMode || 'none'};
	text-orientation: ${({ textOrientation }) => textOrientation || 'none'};
	line-height: ${({ lineHeight }) => lineHeight || 'none'};
`;

export const Line = styled.hr<{
	width?: string;
	height?: string;
	backgroundColor?: string;
	borderRadius?: string;
}>`
	width: ${({ width }) => width || '1px'};
	height: ${({ height }) => height || '1px'};
	border: 1px solid ${({ backgroundColor }) => backgroundColor || '#FFFFFF'};
	border-radius: ${({ borderRadius }) => borderRadius || '0px'};
`;

export const Image = styled.img<{
	width?: string;
	height?: string;
	animationName?: Keyframes;
	animationDuration?: string;
	animationDelay?: string;
	animationFillMode?: string;
	animationDirection?: string;
	borderRadius?: string;
	position?: string;
	top?: string;
	bottom?: string;
	left?: string;
	right?: string;
}>`
	width: ${({ width }) => width || '100%'};
	height: ${({ height }) => height || 'auto'};
	animation-name: ${({ animationName }) => animationName || 'none'};
	animation-duration: ${({ animationDuration }) => animationDuration || '0ms'};
	animation-delay: ${({ animationDelay }) => animationDelay || '0ms'};
	animation-fill-mode: ${({ animationFillMode }) =>
		animationFillMode || 'none'};
	animation-direction: ${({ animationDirection }) =>
		animationDirection || 'normal'};
	border-radius: ${({ borderRadius }) => borderRadius || '0px'};
	position: ${({ position }) => position || 'initial'};
	top: ${({ top }) => top || 'none'};
	bottom: ${({ bottom }) => bottom || 'none'};
	left: ${({ left }) => left || 'none'};
	right: ${({ right }) => right || 'none'};
`;
