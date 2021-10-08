import React, { ReactNode } from 'react';
import StoreContext from './StoreContext';

type Props = {
	children?: ReactNode;
};

const Contexts = ({ children }: Props): JSX.Element => {
	return <StoreContext>{children}</StoreContext>;
};

export default Contexts;
