import React from 'react';
import Products from "./Products";
import Product from './Product';


const Home = () => {
    return (
        <div className='hero'>
            <div class="card bg-dark text-white border-0">
                <img class="card-img" src="/assets/bg.jpg" alt="Background" height = "660px"/>
                <div class="card-img-overlay d-flex flex-column justify-content-center ">
                    <div className="container"></div>
                    <h5 class="card-title display-3 fw-bolder mb-0 ">NEW SEASON ARRIVALS</h5>
                    <p class="card-text lead fs-2">CHECK OUT ALL THE TRENDS </p>
                    
                </div>
            </div>
            <Products/>
        </div>
    );
}

export default Home;