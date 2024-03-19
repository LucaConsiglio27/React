// NavBar.jsx
import React from 'react';
import logo from '../assets/carrito.png';
import './NavBar.css';
import CartWidget from './CartWidget';

const NavBar = ({ children }) => {
    return (
        <nav className="navbar navbar-expand-lg custom-navbar-bg d-flex justify-content-center align-items-center">
            <div className="container-fluid">
                <a className="navbar-brand inicio" href="#">
                    INICIO
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link nosotros" aria-current="page" href="#">NOSOTROS</a>
                        <a className="nav-link" href="#">CONTACTO</a>
                        <a className="nav-link" href="#">PRODUCTOS</a>
                    </div>
                </div>
                <div className="navbar-nav ml-auto d-flex align-items-center"> 
                    <CartWidget /> {/* Agregando el componente CartWidget */}
                    <img src={logo} alt="Logo" className="navbar-logo" />
                </div>
            </div>
            {children}
        </nav>
    );
}

export default NavBar;


