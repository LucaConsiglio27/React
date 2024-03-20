import { useState } from 'react';
import './css/ItemCount.css'; // Importa el archivo CSS aquí

const ItemCount = ({ stock, inicial, onAdd }) => {
    const [cantidad, setCantidad] = useState(inicial);

    const sumar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    };

    const restar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    return (
        <div className='Contador'>
            <div className='Controles'>
                <button className='button' onClick={sumar}></button>
                <h4 className='Numero'>{cantidad}</h4>
                <button className='button' onClick={restar}></button>
            </div>
            <div>
                <button className='button' onClick={() => onAdd(cantidad)} disabled={!stock}></button>
            </div>
        </div>
    );
};

export default ItemCount;
