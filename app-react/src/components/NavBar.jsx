// NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import logo from '../assets/carrito.png';
import './css/NavBar.css';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg custom-navbar-bg d-flex justify-content-center align-items-center">
            <div className="container-fluid">
                <Link className="navbar-brand inicio" to="/"> {/* Utiliza Link para el logo */}
                    INICIO
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link nosotros" to="/nosotros">NOSOTROS</Link> {/* Utiliza Link para los enlaces */}
                        <Link className="nav-link" to="/lacteos">LACTEOS</Link>
                        <Link className="nav-link" to="/postres">POSTRES</Link>
                    </div>
                </div>
                <div className="navbar-nav ml-auto d-flex align-items-center"> 
                    <CartWidget />
                    <img src={logo} alt="Logo" className="navbar-logo" />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
