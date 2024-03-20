import React, { useState } from 'react';
import './css/ItemCount.css'; // Importar el archivo CSS

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const handleIncrement = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleAddToCart = () => {
        onAdd(count);
    };

    return (
        <div className="item-count">
            <div className="counter">
                <button className="decrement" onClick={handleDecrement}>-</button>
                <span className="count">{count}</span>
                <button className="increment" onClick={handleIncrement}>+</button>
            </div>
            <button className="add-to-cart" onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;

