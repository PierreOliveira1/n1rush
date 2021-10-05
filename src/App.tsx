import React from 'react';
import Home from './pages/Home';

// Styles
import GlobalStyles from './styles/GlobalStyled';

const App = (): JSX.Element => {
	return (
		<>
			<GlobalStyles />
			<Home />
		</>
	);
};

export default App;
