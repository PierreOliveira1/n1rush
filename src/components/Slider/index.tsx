import React, { useEffect, useRef, useState } from 'react';

// Assets
import BannerDesktop1 from '../../assets/img/principal_banner_desktop.jpg';
import BannerDesktop2 from '../../assets/img/principal_banner_desktop_02.jpg';
import BannerMobile1 from '../../assets/img/principal_banner_mobile.jpg';
import BannerMobile2 from '../../assets/img/principal_banner_mobile_02.jpg';
import IconArrowLeft from '../../assets/svgs/angle-left-solid.svg';
import IconArrowRight from '../../assets/svgs/angle-right-solid.svg';

// Styles
import { Box, Image, Line, Text } from '../../styles';

// Hooks
import useWindowSize from '../../utils/useWindowSize';
import Button from '../Button';
import { viewSlide } from './animation';
import { Li, Price } from './styles';

const Slider = (): JSX.Element => {
	const [width] = useWindowSize();
	const [slide, setSlide] = useState(1);
	const [aSlide, setASlide] = useState(slide);
	const buttonNextRef = useRef<HTMLAnchorElement>(null);

	const banners = [
		{
			ref: useRef<HTMLLIElement>(null),
			desktop: BannerDesktop1,
			mobile: BannerMobile1,
			name: 'MORTAL KOMBAT',
			price: '299',
			cents: '99',
			description:
				'Mortal Kombat X combina uma apresentação cinemática única com uma jogabilidade totalmente nova. Os jogadores podem escolher pela primeira vez diversas variantes de cada personagens, afetando tanto a estratégia como o estilo de luta.',
		},
		{
			ref: useRef<HTMLLIElement>(null),
			desktop: BannerDesktop2,
			mobile: BannerMobile2,
			name: 'RED DEAD 2',
			price: '300',
			cents: '00',
			description:
				'Red Dead Redemption 2 busca proporcionar o máximo de realidade possível no fim da Época de Ouro do velho oeste, e para você ter uma noção da complexidade dos detalhes, no jogo o cabelo e barba de Arthur crescerão conforme os dias passam.',
		},
	];

	useEffect(() => {
		const mSlide = () => {
			const ref1 = banners[slide - 1].ref;
			const ref2 = banners[aSlide - 1].ref;

			if (ref1 && ref1.current && ref2 && ref2.current) {
				ref2.current.style.display = 'none';
				ref1.current.style.display = 'block';
				setASlide(slide);
			}
		};

		mSlide();
	}, [slide, aSlide]);

	return (
		<Box position="relative" width="100%">
			<ul>
				{banners.map(
					(
						{ ref, desktop, mobile, name, price, cents, description },
						index,
					) => (
						<Li
							ref={ref}
							key={(index + 1).toString()}
							display={index === 0 ? 'block' : 'none'}
							animationName={viewSlide}
							animationDuration="500ms"
						>
							<Image width="100%" src={width > 700 ? desktop : mobile} />
							<Box
								width={width > 700 ? '100vw' : '100%'}
								height={width > 700 ? '100vh' : '50%'}
								position="absolute"
								left={width > 700 ? '0' : 'none'}
								top={width > 700 ? '0' : 'none'}
								bottom={width <= 700 ? '0' : 'none'}
								backgroundColor="#000000"
								opacity={width <= 700 ? '0.65' : '0.3'}
							/>
							<Box
								width={width <= 700 ? '100%' : '80%'}
								height="50%"
								display="flex"
								justifyContent="center"
								alignItems="center"
								position="absolute"
								top={width > 700 ? '21%' : 'none'}
								bottom={width <= 700 ? '0' : 'none'}
							>
								<Box
									width="90%"
									display="flex"
									alignItems="flex-end"
									flexDirection="column"
								>
									<Text fontSize="26px" weight="900">
										{name}
									</Text>
									<Price>
										<Text fontSize="48px" weight="900" color="#3EC6E0">
											{`R$ ${price}`}
										</Text>
										<Text
											fontSize="28px"
											weight="900"
											marginTop=".3rem"
											color="#3EC6E0"
										>{`,${cents}`}</Text>
									</Price>
									<Box width={width <= 700 ? '90%' : '30%'}>
										<Text
											lineHeight="155%"
											fontSize="12px"
											weight="400"
											textAlign="right"
										>
											{description}
										</Text>
									</Box>
								</Box>
							</Box>
						</Li>
					),
				)}
			</ul>
			<Box
				width={width <= 700 ? '100%' : '63px'}
				height={width <= 700 ? '52px' : '384px'}
				display="flex"
				position="absolute"
				top={width > 700 ? '20%' : 'none'}
				bottom={width <= 700 ? '-46px' : 'none'}
				right={width > 700 ? '0' : 'none'}
				backgroundColor="#3EC6E0"
				borderRadius="0px 0px 0px 10px"
				flexDirection={width > 700 ? 'column' : 'row'}
			>
				<Box
					width={width <= 700 ? '60%' : '100%'}
					height={width <= 700 ? '100%' : '80%'}
					display="flex"
					justifyContent={width <= 700 ? 'center' : 'space-around'}
					alignItems="center"
					flexDirection={width <= 700 ? 'row' : 'column'}
				>
					<Text
						textOrientation="mixed"
						writingMode={width > 700 ? 'vertical-rl' : 'none'}
						weight="400"
					>
						{banners[slide - 1].name}
					</Text>
					{width > 700 && <Line height="30%" />}
				</Box>
				<Box
					width={width <= 700 ? '40%' : '100%'}
					height={width <= 700 ? '100%' : '20%'}
					display="flex"
					backgroundColor="#084154"
					borderRadius={width > 700 ? '0px 0px 0px 10px' : 'none'}
				>
					<Box
						width="100%"
						height="100%"
						display="flex"
						justifyContent="center"
						alignItems="center"
						flexDirection={width <= 700 ? 'row' : 'column'}
					>
						<Text
							marginBottom={width > 700 ? '1rem' : 'none'}
						>{`${slide} / ${banners.length}`}</Text>
						<Box
							width={width <= 700 ? '50%' : '80%'}
							display="flex"
							justifyContent="space-around"
						>
							<Button
								ref={buttonNextRef}
								type="icon"
								icon={IconArrowLeft}
								widthIcon="10px"
								heightIcon="17px"
								onClick={
									slide === 1
										? () => setSlide(banners.length)
										: () => setSlide(slide - 1)
								}
							/>
							<Button
								type="icon"
								icon={IconArrowRight}
								widthIcon="10px"
								heightIcon="17px"
								onClick={
									slide === banners.length
										? () => setSlide(1)
										: () => setSlide(slide + 1)
								}
							/>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Slider;
