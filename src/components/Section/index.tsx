import React, { useEffect, useRef, useState } from 'react';

// Styles
import { Box, Text, Image, Line } from '../../styles';
import { Options, Products, Button as ButtonLink } from './styles';

// Components
import Card from '../Card';
import Button from '../Button';

// Assets
import ImageZelda from '../../assets/img/zelda_banner.webp';
import ImageSekiro from '../../assets/img/sekiro_banner.webp';
import IconProducts from '../../assets/svgs/icon_products.svg';
import Outriders from '../../assets/img/product-outriders.webp';
import Cyberpunk from '../../assets/img/product-cyberpunk2077.webp';
import DonkeyKong from '../../assets/img/product-donkey-kong-country-tropical-freeze.webp';
import ArrowLeft from '../../assets/svgs/angle-left-black.svg';
import ArrowRight from '../../assets/svgs/angle-right-black.svg';
import Mario from '../../assets/svgs/image_6-removebg-preview 1.svg';

// Hooks
import useWindowSize from '../../utils/useWindowSize';
import { viewSlide } from '../Slider/animation';
import { viewMario } from './animations';

// Contexts
import { StoreTypes, useStoreContext } from '../../contexts/StoreContext';
import Modal from '../Modal';

const Section = (): JSX.Element => {
	const [width] = useWindowSize();
	const [slide, setSlide] = useState(1);
	const [buttons, setButtons] = useState([false, false, false]);
	const [aSlide, setASlide] = useState(slide);
	const [isModal, setIsModal] = useState(false);
	const { store, setStore }: StoreTypes = useStoreContext();

	const cards = [
		{
			name: 'The Legend of Zelda - Breath of the wild',
			image: ImageZelda,
		},
		{
			name: 'SEKIRO - Shadows die twice',
			image: ImageSekiro,
		},
	];

	const options = [
		{
			ref: useRef<HTMLDivElement>(null),
			name: 'Outriders',
			price: 'R$ 200,00',
			image: Outriders,
			state: buttons[0],
		},
		{
			ref: useRef<HTMLDivElement>(null),
			name: 'CYBERPUNK 2077',
			price: 'R$ 200,00',
			image: Cyberpunk,
			state: buttons[1],
		},
		{
			ref: useRef<HTMLDivElement>(null),
			name: 'Donkey Kong Countru Tropical Freeze',
			price: 'R$ 200,00',
			image: DonkeyKong,
			state: buttons[2],
		},
	];

	const onClick = (index: number) => {
		const newList: boolean[] = buttons;
		if (newList[index]) {
			newList[index] = !newList[index];
		} else {
			newList[index] = true;
		}
		setButtons([...newList]);
		if (buttons[index]) {
			setStore(store + 1);
		} else {
			setStore(store - 1);
		}
	};

	useEffect(() => {
		const mSlide = () => {
			const ref1 = options[slide - 1].ref;
			const ref2 = options[aSlide - 1].ref;

			if (ref1 && ref1.current && ref2 && ref2.current) {
				ref2.current.style.display = 'none';
				ref1.current.style.display = 'block';
				setASlide(slide);
			}
		};

		mSlide();
	}, [slide, aSlide]);

	return (
		<>
			<Box
				width="100%"
				display="flex"
				justifyContent="center"
				alignItems={width < 1100 ? 'center' : 'flex-start'}
				flexDirection={width > 1100 ? 'row' : 'column'}
				marginTop={width > 1000 ? '-10%' : '17%'}
			>
				{cards.map(({ name, image }, index) => (
					<Card
						key={index.toString()}
						name={name}
						image={image}
						marginBottom={index === 0 && width <= 1100 ? '1rem' : '0px'}
						marginRight={index === 0 && width > 1100 ? '1rem' : '0px'}
					/>
				))}
			</Box>
			<Products>
				<Box display="flex" marginBottom="2rem">
					<Image
						src={IconProducts}
						width={width > 700 ? '28px' : '18px'}
						height="28px"
					/>
					<Text
						fontSize={width > 700 ? '36px' : '18px'}
						weight="300"
						color="#084154"
						marginLeft="1rem"
					>
						Produtos em destaque
					</Text>
				</Box>
				<Options>
					{width <= 1000 && (
						<Button
							type="icon"
							icon={ArrowLeft}
							position="absolute"
							left="10%"
							widthIcon="28px"
							onClick={
								slide === 1
									? () => setSlide(options.length)
									: () => setSlide(slide - 1)
							}
						/>
					)}
					{width <= 1000 && (
						<Button
							type="icon"
							icon={ArrowRight}
							position="absolute"
							right="10%"
							widthIcon="28px"
							onClick={
								slide === options.length
									? () => setSlide(1)
									: () => setSlide(slide + 1)
							}
						/>
					)}
					{options.map(({ ref, name, price, image, state }, index) => {
						if (width < 1000)
							return (
								<Box
									ref={ref}
									key={index.toString()}
									width={width > 700 ? '300px' : '200px'}
									display={index === 0 ? 'block' : 'none'}
									boxShadow="0px 4px 20px 7px rgba(0, 0, 0, 0.07)"
									borderRadius="10px"
									animationName={viewSlide}
									animationDuration="500ms"
								>
									<Image src={image} borderRadius="0px 0px 10px 10px" />
									<Box
										width={width > 700 ? '300px' : '200px'}
										height="110px"
										paddingLeft="1rem"
										paddingTop="1rem"
										borderTop="2px solid #3EC6E0"
									>
										<Text weight="400" fontSize="14px" color="#084154">
											{name}
										</Text>
										<Text
											weight="900"
											fontSize="18px"
											color="#084154"
											marginTop="2rem"
										>
											{price}
										</Text>
									</Box>
									<Box
										width="100%"
										height="60px"
										display="flex"
										justifyContent="center"
									>
										<ButtonLink
											onClick={e => {
												e.preventDefault();
												onClick(index);
												if (!state) setIsModal(true);
											}}
											justifyContent={state ? 'center' : 'flex-start'}
											paddingLeft={state ? 'none' : '1rem'}
											backgroundColor={state ? '#084154' : '#3ec6e0'}
										>
											<Text weight="900" fontSize="18px">
												{state ? 'COMPRADO!' : 'COMPRAR'}
											</Text>
										</ButtonLink>
									</Box>
								</Box>
							);

						return (
							<Box
								ref={ref}
								key={index.toString()}
								width={width > 700 ? '300px' : '200px'}
								display="block"
								boxShadow="0px 4px 20px 7px rgba(0, 0, 0, 0.07)"
								borderRadius="10px"
								animationName={viewSlide}
								animationDuration="500ms"
							>
								<Image src={image} borderRadius="0px 0px 10px 10px" />
								<Box
									width={width > 700 ? '300px' : '200px'}
									height="110px"
									paddingLeft="1rem"
									paddingTop="1rem"
									borderTop="2px solid #3EC6E0"
								>
									<Text weight="400" fontSize="14px" color="#084154">
										{name}
									</Text>
									<Text
										weight="900"
										fontSize="18px"
										color="#084154"
										marginTop="2rem"
									>
										{price}
									</Text>
								</Box>
								<Box
									width="100%"
									height="60px"
									display="flex"
									justifyContent="center"
									position="relative"
								>
									<ButtonLink
										onClick={e => {
											e.preventDefault();
											onClick(index);
											if (!state) setIsModal(true);
										}}
										justifyContent={state ? 'flex-start' : 'center'}
										paddingLeft={state ? '2rem' : 'none'}
										backgroundColor={state ? '#084154' : '#3ec6e0'}
									>
										<Text weight="900" fontSize="18px">
											{state ? 'COMPRADO!' : 'COMPRAR'}
										</Text>
										{state && (
											<Image
												src={Mario}
												width="68px"
												position="absolute"
												bottom="15%"
												right="15%"
												animationName={viewMario}
												animationDuration="300ms"
											/>
										)}
									</ButtonLink>
								</Box>
							</Box>
						);
					})}
				</Options>
			</Products>
			{isModal && (
				<Modal
					display="flex"
					justifyContent="flex-end"
					alignItems="center"
					flexDirection="column"
					setState={setIsModal}
				>
					<Box display="flex" width="100%" alignItems="center">
						<Line width="15%" backgroundColor="#084154" />
						<Box width="70%">
							<Text
								weight="300"
								fontSize="30px"
								color="#084154"
								textAlign="center"
							>
								Pedido realizado com sucesso!
							</Text>
						</Box>
						<Line width="15%" backgroundColor="#084154" />
					</Box>
					<Box marginTop="5rem">
						<Image src={Mario} width="217px" />
					</Box>
				</Modal>
			)}
		</>
	);
};

export default Section;
