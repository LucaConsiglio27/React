// ProdCard.jsx
import React, { useState } from 'react';
import './ProdCard.css'; // Importar el archivo de estilos CSS

const ProductCard = ({ name, image, description }) => { // Acepta propiedades para el nombre y la imagen del producto
    const [quantity, setQuantity] = useState(0);

    const handleIncrement = () => {
        if (quantity < 15) {
            setQuantity(prevQuantity => prevQuantity + 1);
        }
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <div className="product-card">
            <img src={image} alt={name} /> {/* Usa la imagen y el nombre del producto proporcionados */}
            <h3>{name}</h3>
            <p>{description}</p>
            <p>Cantidad: {quantity}</p>
            <div className="quantity-controls">
                <button onClick={handleDecrement}>-</button>
                <button onClick={handleIncrement}>+</button>
            </div>
        </div>
    );
}

export default ProductCard;
