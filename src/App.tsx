import React from 'react';

// Pages
import Home from './pages/Home';

// Styles
import GlobalStyles from './styles/GlobalStyles';

// Context
import Contexts from './contexts';

const App = (): JSX.Element => {
	return (
		<Contexts>
			<GlobalStyles />
			<Home />
		</Contexts>
	);
};

export default App;
