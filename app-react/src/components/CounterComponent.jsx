// CounterComponent.jsx
import React, { useState } from "react";
import '../App.css';

export default function CounterComponent() {
    const [contador, setContador] = useState(0);

    const handleClick = () => {
        if (contador < 20) {
            setContador(contador + 1);
        }
    };

    const handleClick2 = () => {
        if (contador > 0) {
            setContador(contador - 1);
        }
    };

    return (
        <div className="counter">
            <button onClick={handleClick}>+</button>
            <p>{contador}</p>
            <button onClick={handleClick2}>-</button>
        </div>
    );
}

