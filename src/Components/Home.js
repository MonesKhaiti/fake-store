import React from 'react';
import Products from '../Products';

const Home = () => {
    return (
        <div className='home'>
            <div className="card bg-dark twxt-white border-0">
                <img src="/assets/pic.jpg" className="card-img" alt="Background" />
                <div className="card-img-overlay d-flex flex-column ">
                    <div className='container'>
                        <h5 className="card-title display-3 fw-bolder mb-0">Card title</h5>
                        <p className="card-text lead fs-2">SUMMER NEW COLLECTION.</p>
                    </div>

                </div>
            </div>
            <Products />
        </div>
    );
}

export default Home;