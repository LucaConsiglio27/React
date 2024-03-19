// CartWidget.jsx
import React from 'react';

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <i className="fas fa-shopping-cart"></i> {/* Icono del carrito */}
            <span className="cart-notification">0</span> {/* Número hardcodeado */}
        </div>
    );
}

export default CartWidget;
