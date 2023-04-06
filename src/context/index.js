import React, { createContext, useState } from 'react';

export const StoreContext = createContext();
export const Provider = (props) => {
	const [ selectedItems, setSelectedItems ] = useState([]);
	const addItem = (item) => {
		setSelectedItems([ ...selectedItems, item ]);
	};
	const values = {
		selectedItems,
		addItem
	};

	return <StoreContext.Provider value={values}>{props.children}</StoreContext.Provider>;
};
