import React, { MouseEventHandler, forwardRef } from 'react';
import { Keyframes } from 'styled-components';
import { Text } from '../../styles';

// Styles
import { ButtonIcon, Icon, ButtonContent } from './styles';

type Props = {
	type?: 'icon' | string;
	icon?: string;
	label?: string;
	width?: string;
	height?: string;
	widthIcon?: string;
	heightIcon?: string;
	fontFamily?: string;
	fontSize?: string;
	color?: string;
	weight?: string;
	display?: string;
	justifyContent?: string;
	alignItems?: string;
	position?: string;
	top?: string;
	right?: string;
	left?: string;
	marginBottom?: string;
	onClick?: MouseEventHandler;
	className?: string;
	animationName?: Keyframes;
	animationDuration?: string;
	animationDelay?: string;
	animationFillMode?: string;
	target?: string;
	href?: string;
};

const Button = forwardRef<HTMLAnchorElement, Props>(
	(
		{
			type,
			icon,
			label,
			width,
			height,
			widthIcon,
			heightIcon,
			fontFamily,
			fontSize,
			color,
			weight,
			display,
			justifyContent,
			alignItems,
			position,
			top,
			left,
			right,
			marginBottom,
			onClick,
			className,
			animationName,
			animationDuration,
			animationDelay,
			animationFillMode,
			target,
			href,
		},
		ref,
	): JSX.Element => {
		if (type === 'icon')
			return (
				<ButtonIcon
					width={width}
					height={height}
					ref={ref}
					display={display}
					justifyContent={justifyContent}
					alignItems={alignItems}
					position={position}
					top={top}
					left={left}
					right={right}
					marginBottom={marginBottom}
					onClick={onClick}
					className={className}
					animationName={animationName}
					animationDuration={animationDuration}
					animationDelay={animationDelay}
					animationFillMode={animationFillMode}
					target={target}
					href={href}
				>
					<Icon src={icon} width={widthIcon} height={heightIcon} />
					{label && (
						<Text
							fontFamily={fontFamily}
							fontSize={fontSize}
							color={color}
							weight={weight}
							marginLeft=".5rem"
						>
							{label}
						</Text>
					)}
				</ButtonIcon>
			);

		return (
			<ButtonContent
				ref={ref}
				animationName={animationName}
				animationDuration={animationDuration}
				animationDelay={animationDelay}
				animationFillMode={animationFillMode}
				marginBottom={marginBottom}
			>
				<Text weight="400">{label}</Text>
			</ButtonContent>
		);
	},
);

export default Button;
