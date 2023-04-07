import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShowProduct } from './ShowProduct';
import { CircleLoader } from 'react-spinners';

const Product = () => {
	const { id } = useParams();
	const [ product, setProduct ] = useState({});
	const [ loading, setLoading ] = useState(false);
	console.log('single product ', product);
	useEffect(
		() => {
			const getProduct = async () => {
				setLoading(true);
				const response = await fetch(`https://fakestoreapi.com/products/${id}`);
				setProduct(await response.json());
				setLoading(false);
			};
			getProduct();
		},
		[ id ]
	);
	return (
		<div className="container">
			<div className="row mt-5">
				{loading ? (
					<CircleLoader olor="#111312" cssOverride={{ margin: `auto`, marginTop: 150 }} size={350} />
				) : (
					<ShowProduct product={product} />
				)}
			</div>
		</div>
	);
};

export default Product;
