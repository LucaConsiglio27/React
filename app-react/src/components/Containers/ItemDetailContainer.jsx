import '../css/ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import { getProductById } from '../../asyncMock';
import ItemDetail from '../ItemDetail';
import { useParams } from 'react-router-dom'; // Importa useParams desde react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { itemId } = useParams(); // Corrige la desestructuración de useParams

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await getProductById(itemId); // Corrige el uso de 'ItemId'
                setProduct(response);
            } catch (error) {
                console.error(error);
            }
        };

        getProduct();
    }, [itemId]); // Asegúrate de incluir itemId en la lista de dependencias

    return (
        <div className='ItemDetailContainer'>
            {product && <ItemDetail {...product} />} {/* Asegúrate de que el producto exista antes de renderizar */}
        </div>
    );
}

export default ItemDetailContainer;
