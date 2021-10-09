import React from 'react';

// Components
import Header from '../../components/Header';
import Section from '../../components/Section';
import Slider from '../../components/Slider';

// Styles
import { Container } from '../../styles';

const Home = (): JSX.Element => {
	return (
		<Container alignItems="center">
			<Header />
			<Slider />
			<Section />
		</Container>
	);
};

export default Home;
