import React from 'react';
import {NavLink} from "react-router-dom";
import { useSelector } from 'react-redux';
const Navbar = () => {

    const state = useSelector((state) => state.handleCart);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white py-3 shadow-sm">
                <NavLink className="navbar-brand fw-bold fs-4" href="#"> LA collection</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">  </span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/"> {" "} Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Products"> {" "}Products </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/About"> {" "}About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Contact"> {" "}Contact</NavLink>
                        </li>
                        
                    </ul>
                    <div className="buttons">
                        <NavLink href="" className="btn btn-outline-dark"><i className="fa fa-sign-in me-1"></i> Login</NavLink>
                        <NavLink href="" className="btn btn-outline-dark"><i className="fa fa-user-plus me-1 ms-2"></i> Regsiter</NavLink>
                        <NavLink to="/Cart" className="btn btn-outline-dark"><i className="fa fa-shopping-cart me-1 ms-2"></i>{" "} Cart({state.length})</NavLink>
                    </div>
                   
                </div>
            </nav>

        </div>
    )
}

export default Navbar;