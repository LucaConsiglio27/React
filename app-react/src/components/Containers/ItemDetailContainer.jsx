import '../css/ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Agregué la importación faltante
import { getProductById } from '../../asyncMock';
import ItemDetail from '../ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { itemId } = useParams(); // Corregí el nombre de la variable

    useEffect(() => {
        getProductById(itemId) // Usé la variable itemId en lugar de 'ItemId' como cadena
            .then(response => {
                setProduct(response);
            })
            .catch(error => {
                console.error(error);
            });
    }, [itemId]);

    return (
        <div className='ItemDetailContainer'>
            {product && <ItemDetail {...product} />} {/* Asegurándome de que product no sea null antes de renderizar */}
        </div>
    );
};

export default ItemDetailContainer;
