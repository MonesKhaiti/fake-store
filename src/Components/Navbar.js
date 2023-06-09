import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
				<div className="container">
					<Link className="navbar-brand fw-bold fs-4" to="/">
						COLLECTION
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mx-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link className="nav-link active" aria-current="page" to="/">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/">
									Products
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/About">
									About
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/Contact">
									Contact
								</Link>
							</li>
						</ul>
						<div className="buttons">
							<Link href="" className="btn btn-outline-dark">
								<i className="fa fa-sign-in me-1" />Login
							</Link>
							<Link href="" className="btn btn-outline-dark ms-2">
								<i className="fa fa-sign-in me-1" />Register
							</Link>
							<Link to="/cart" className="btn btn-outline-dark ms-2">
								<i className="fa fa-sign-in me-1" />Cart
							</Link>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
