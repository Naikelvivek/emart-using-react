import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                            we are currently the top shopping store
                            Welcome to E-Kart, your one-stop destination for all your shopping needs! At E-Kart, we are committed to providing you with a seamless and enjoyable online shopping experience. Our platform is designed to cater to a diverse range of products, ensuring that you find exactly what you're looking for, all from the comfort of your home.

<h3>
    Our Mission </h3>
<p>At E-Kart, our mission is to make online shopping accessible, convenient, and affordable for everyone. We strive to offer a vast selection of products, competitive prices, and exceptional customer service to ensure that every shopping experience is a positive one.
                        </p>
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/about.jpg" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
