import React, { createContext, ReactNode, useContext, useState } from 'react';

type StoreTypes = {
	store?: number;
	setStore?: (e: number) => void;
};

const Store = createContext<StoreTypes>({
	store: 0,
	setStore: e => e,
});

export const useStoreContext = (): StoreTypes => useContext(Store);

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
