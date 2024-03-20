// ProdCard.jsx

import React, { useState } from 'react';
import './css/ProdCard.css'; // Importar el archivo de estilos CSS
import ItemCount from './ItemCount'; // Importa el componente ItemCount

const ProductCard = ({ name, image, description, precio, stock }) => {
    const [showDescription, setShowDescription] = useState(false); // Estado para controlar si se muestra la descripción o no
    const [quantity, setQuantity] = useState(0); // Estado para la cantidad

    const handleIncrement = () => {
        if (quantity < stock) {
            setQuantity(prevQuantity => prevQuantity + 1);
        }
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const handleAddToCart = () => {
        // Aquí puedes agregar la lógica para agregar el producto al carrito
        console.log(`Agregando ${name} al carrito con cantidad ${quantity}`);
    };

    return (
        <div className="product-card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p className="price">Precio: ${precio}</p>
            <p className="stock">Stock: {stock}</p> {/* Muestra el stock */}
            <div className="description-container">
                {showDescription && (
                    <div className="description">
                        <p>{description}</p>
                    </div>
                )}
                {!showDescription && (
                    <div className="quantity-controls">
                        <button className="quantity-button" onClick={handleDecrement}>-</button>
                        <span className="quantity">{quantity}</span>
                        <button className="quantity-button" onClick={handleIncrement}>+</button>
                    </div>
                )}
            </div>
            {!showDescription && (
                <button className="add-to-cart-button" onClick={handleAddToCart}>
                    Agregar al Carrito
                </button>
            )}
        </div>
    );
}

export default ProductCard;
