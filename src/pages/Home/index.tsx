import React from 'react';

// Components
import Header from '../../components/Header';
import Slider from '../../components/Slider';

// Styles
import { Container } from '../../styles';

const Home = (): JSX.Element => {
	return (
		<Container backgroundColor="#000" alignItems="flex-start">
			<Header />
			<Slider />
		</Container>
	);
};

export default Home;
