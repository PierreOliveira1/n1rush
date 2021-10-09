import React, { createContext, ReactNode, useContext, useState } from 'react';

export type StoreTypes = {
	store?: any;
	setStore?: any;
};

export const Store = createContext<StoreTypes>({
	store: 0,
	setStore: () => {},
});

export const useStoreContext = () => useContext<StoreTypes>(Store);

type Props = {
	children?: ReactNode;
};

const StoreContext = ({ children }: Props): JSX.Element => {
	const [store, setStore] = useState(0);

	return (
		<Store.Provider value={{ store, setStore }}>{children}</Store.Provider>
	);
};

export default StoreContext;
