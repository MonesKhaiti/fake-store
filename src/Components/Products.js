import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Products = () => {
	const navigate = useNavigate();
	const [ data, setData ] = useState([]);
	const [ filter, setFilter ] = useState(data);
	const [ loading, setLoading ] = useState(false);
	let componentMounted = useRef(true);

	useEffect(() => {
		const getProducts = async () => {
			setLoading(true);
			const response = await fetch('https://fakestoreapi.com/products');
			if (componentMounted) {
				setData(await response.clone().json());
				setFilter(await response.json());
				setLoading(false);
				console.log(filter);
			}

			return () => {
				componentMounted = false;
			};
		};

		if (loading) {
			return <div>Loading...</div>;
		}

		getProducts();
	}, []);

	const filterProduct = (cat) => {
		const updatedList = data.filter((x) => x.category === cat);
		setFilter(updatedList);
	};

	const ShowProducts = () => {
		return (
			<div>
				<div className="buttons d-flex justify-content-center mb-5 pb-5">
					<button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>
						All
					</button>
					<button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>
						Men's Clothing
					</button>
					<button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>
						Women's Clothing
					</button>
					<button className="btn btn-outline-dark me-2" onClick={() => filterProduct('jewelery')}>
						Jewelery
					</button>
					<button className="btn btn-outline-dark me-2" onClick={() => filterProduct('electronics')}>
						Electronics
					</button>
				</div>
				<div className="row">
					{filter.map((product) => {
						return (
							<div
								style={{ width: 400, margin: '10px', cursor: 'pointer' }}
								className="card h-100 text-center p-4"
								key={product.id}
								onClick={() => navigate(`/${product.id}`)}
							>
								<img src={product.image} className="card-img-top" alt={product.title} height="250px" />
								<div className="card-body">
									<h5 className="card-title mb-0">{product.title.substring(0, 12)}</h5>
									<p className="card-text lead fw-bold">${product.price}</p>
									<a href="/some-page">Buy</a>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	};

	return (
		<div>
			<div className="container my-5 py-5">
				<div className="row justify-content-center">
					<div className="col-12 mb-5">
						<h1 className="display-6 fw-bolder text-center">Latest Products</h1>
						<hr />
					</div>
				</div>
				<div className="row justify-content-center">{<ShowProducts />}</div>
			</div>
		</div>
	);
};

export default Products;
