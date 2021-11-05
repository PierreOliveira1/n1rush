import React, { useState, useRef, useEffect } from 'react';

// Styles
import { Box, Line, Text } from '../../styles';
import {
	BoxMenu,
	ContainerMenu,
	Content,
	ContentMenu,
	Form,
	Input,
	Textarea,
	SpaceOne,
	SpaceTwo,
	Triangle,
} from './styles';

// Animations
import {
	textAnimationOpen,
	textAnimationClose,
	inputOpen,
	inputClose,
} from './animations';

// Components
import Button from '../Button';
import Modal from '../Modal';

// Assets
import IconMenu from '../../assets/svgs/icon_hamburguer.svg';
import Logo from '../../assets/img/Logo.png';
import IconContact from '../../assets/svgs/paper-plane.svg';
import IconSearch from '../../assets/svgs/search-solid.svg';
import IconStore from '../../assets/svgs/shopping-bag-solid.svg';
import IconClose from '../../assets/svgs/icon_hamburguer_close.svg';
import IconInputClose from '../../assets/svgs/icon_input_close.svg';

// Hooks
import useWindowSize from '../../utils/useWindowSize';

// Contexts
import { useStoreContext } from '../../contexts/StoreContext';

const Header = (): JSX.Element => {
	const [isMenu, setIsMenu] = useState(false);
	const [isInput, setIsInput] = useState(false);
	const [isModal, setIsModal] = useState(false);
	const [width] = useWindowSize();
	const containerMenu = useRef<HTMLDivElement>(null);
	const boxMenu = useRef<HTMLDivElement>(null);
	const iconInputCloseRef = useRef<HTMLAnchorElement>(null);
	const { store = 0 } = useStoreContext();

	useEffect(() => {
		const menu = () => {
			document.documentElement.style.overflow = isMenu ? 'hidden' : 'auto';
			const divContainerMenu = containerMenu.current;
			const divBoxMenu = boxMenu.current;
			if (isMenu && divContainerMenu && divBoxMenu) {
				divContainerMenu.style.display = 'block';
				divBoxMenu.style.display = 'flex';
				divContainerMenu.addEventListener('click', e => {
					if (e.target === divContainerMenu) setIsMenu(false);
				});
			} else {
				setTimeout(() => {
					if (divContainerMenu && divBoxMenu) {
						divContainerMenu.style.display = 'none';
						divBoxMenu.style.display = 'none';
					}
				}, 700);
			}
		};

		menu();
	}, [isMenu, containerMenu]);

	useEffect(() => {
		const input = () => {
			if (isInput && iconInputCloseRef && iconInputCloseRef.current) {
				iconInputCloseRef.current.style.display = 'block';
			} else {
				setTimeout(() => {
					if (iconInputCloseRef && iconInputCloseRef.current)
						iconInputCloseRef.current.style.display = 'none';
				}, 200);
			}
		};

		input();
	}, [isInput, iconInputCloseRef]);

	const optionsMenu = [
		[
			{
				type: 'text',
				label: 'Luta',
			},
			{
				type: 'button',
				label: 'Mortal Kombat',
			},
			{
				type: 'button',
				label: 'Smash Bros',
			},
			{
				type: 'button',
				label: 'Killer Instict',
			},
			{
				type: 'button',
				label: 'DBZ Kakarot',
			},
		],
		[
			{
				type: 'text',
				label: 'Ação / Aventura',
			},
			{
				type: 'button',
				label: 'GTA V',
			},
			{
				type: 'button',
				label: 'Tomb Raider',
			},
			{
				type: 'button',
				label: 'HALO',
			},
			{
				type: 'button',
				label: 'Call of Duty',
			},
		],
		[
			{
				type: 'text',
				label: 'Corrida',
			},
			{
				type: 'button',
				label: 'NEED For SPEED',
			},
			{
				type: 'button',
				label: 'Forza Horizon',
			},
		],
	];

	return (
		<>
			<Content>
				<SpaceOne>
					<Button
						type="icon"
						icon={width <= 700 && isMenu ? IconClose : IconMenu}
						onClick={() => {
							setIsMenu(!isMenu);
						}}
					/>
					<Button
						type="icon"
						icon={Logo}
						widthIcon={width < 700 ? '107px' : 'auto'}
					/>
				</SpaceOne>
				<SpaceTwo>
					<Button
						type="icon"
						icon={IconContact}
						label={width > 800 ? 'CONTATO' : undefined}
						weight="500"
						onClick={() => setIsModal(true)}
					/>
					{width > 800 && <Line height="30px" />}
					<Button
						type="icon"
						icon={IconSearch}
						label={width > 800 ? 'BUSCAR' : undefined}
						weight="500"
						onClick={() => setIsInput(!isInput)}
					/>
					{width > 900 && (
						<Box
							height="35px"
							display="flex"
							alignItems="center"
							justifyContent="space-around"
							position="absolute"
							backgroundColor="#FFFFFF"
							zIndex="4"
							borderRadius="5px"
							animationName={isInput ? inputOpen : inputClose}
							animationDuration="300ms"
							animationFillMode="both"
						>
							<Input placeholder="Pesquise aqui..." />
							<Button
								ref={iconInputCloseRef}
								type="icon"
								icon={IconInputClose}
								widthIcon="20px"
								heightIcon="20px"
								onClick={() => setIsInput(!isInput)}
							/>
						</Box>
					)}
					{width > 800 && <Line height="30px" />}
					<Box display="flex" alignItems="flex-end" position="relative">
						<Button type="icon" icon={IconStore} />
						{store && (
							<Box
								width="23px"
								height="23px"
								display="flex"
								justifyContent="center"
								alignItems="center"
								backgroundColor="#3EC6E0"
								borderRadius="50%"
								marginLeft=".2rem"
								position={width <= 700 ? 'absolute' : undefined}
								left="65%"
							>
								<Text weight="900">{store}</Text>
							</Box>
						)}
					</Box>
				</SpaceTwo>
				{width <= 900 && (
					<Box
						width="100%"
						height="35px"
						display="flex"
						alignItems="center"
						justifyContent="space-around"
						position="absolute"
						backgroundColor="#FFFFFF"
						zIndex="4"
						borderRadius="5px"
						animationName={isInput ? inputOpen : inputClose}
						animationDuration="300ms"
						animationFillMode="both"
					>
						<Input placeholder="Pesquise aqui..." />
						<Button
							ref={iconInputCloseRef}
							type="icon"
							icon={IconInputClose}
							widthIcon="20px"
							heightIcon="20px"
							onClick={() => setIsInput(!isInput)}
						/>
					</Box>
				)}
			</Content>
			<ContainerMenu ref={containerMenu}>
				<ContentMenu animation={isMenu}>
					<BoxMenu ref={boxMenu}>
						{optionsMenu.map((options, indexOne) => (
							<Box width="100%" key={indexOne.toString()}>
								<Box width="100%" display="flex" flexDirection="column">
									{options.map(({ type, label }, index) => {
										if (type === 'text')
											return (
												<Box
													key={index.toString()}
													width="100%"
													height="30px"
													paddingLeft="10px"
												>
													<Text
														animationName={
															isMenu ? textAnimationOpen : textAnimationClose
														}
														animationDuration={`${index * 100 + 300}ms`}
														animationDelay={
															isMenu ? `${(index + 1) * 300}ms` : `0ms`
														}
														animationFillMode="both"
														fontSize="16px"
														weight="700"
													>
														{label}
													</Text>
												</Box>
											);

										return (
											<Button
												animationName={
													isMenu ? textAnimationOpen : textAnimationClose
												}
												animationDuration={`${index * 100 + 300}ms`}
												animationDelay={
													isMenu ? `${(index + 1) * 300}ms` : `0ms`
												}
												animationFillMode="both"
												key={index.toString()}
												label={label}
											/>
										);
									})}
								</Box>
								{width <= 700 && indexOne !== optionsMenu.length - 1 && (
									<Box marginTop="1rem" marginBottom="1rem">
										<Line width="90%" backgroundColor="#062C38" />
									</Box>
								)}
							</Box>
						))}
					</BoxMenu>
					{width > 700 && <Triangle animation={isMenu} />}
				</ContentMenu>
			</ContainerMenu>
			{isModal && (
				<Modal
					setState={setIsModal}
					display="flex"
					alignItems="center"
					flexDirection="column"
				>
					<Text
						marginTop="3rem"
						marginBottom="4rem"
						weight="900"
						fontSize="20px"
						color="#000000"
					>
						Contato
					</Text>
					<Form>
						<Input
							type="text"
							placeholder="Name..."
							width="100%"
							border="2px solid #343434"
							borderRadius="5px"
							paddingLeft="2%"
						/>
						<Input
							type="text"
							placeholder="E-mail..."
							width="100%"
							border="2px solid #343434"
							borderRadius="5px"
							paddingLeft="2%"
							marginTop="2%"
						/>
						<Textarea placeholder="Mensagem..." />
						<Button
							width="40%"
							height="2rem"
							justifyContent="center"
							paddingLeft="0"
							marginTop="5%"
							backgroundColor="#343434"
							label="Enviar"
							color="#FFFFFF"
						/>
					</Form>
				</Modal>
			)}
		</>
	);
};

export default Header;
