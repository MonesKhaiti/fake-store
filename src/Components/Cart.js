import React from 'react';
import { useContext } from 'react';
import { StoreContext } from '../context';
export const Cart = () => {
	const { selectedItems } = useContext(StoreContext);
	console.log(selectedItems);
	return (
		<div>
			{selectedItems.map(({ id, title, price, image }) => (
				<div key={id}>
					<h3>{title}</h3>
					<h3>{price}</h3>
					<img src={image} />
				</div>
			))}
		</div>
	);
};
