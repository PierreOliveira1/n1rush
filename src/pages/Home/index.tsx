import React from 'react';

// Components
import Header from '../../components/Header';

// Styles
import { Container, Image } from '../../styles';

// Assets
import BannerDesktop from '../../assets/img/principal_banner_desktop.jpg';
import BannerMobile from '../../assets/img/principal_banner_mobile.jpg';

// Hooks
import useWindowSize from '../../utils/useWindowSize';

const Home = (): JSX.Element => {
	const [width] = useWindowSize();

	return (
		<Container backgroundColor="#000" alignItems="flex-start">
			<Header />
			<Image src={width > 700 ? BannerDesktop : BannerMobile} />
		</Container>
	);
};

export default Home;
