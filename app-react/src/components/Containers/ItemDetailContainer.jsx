import React, { useState, useEffect } from 'react';
import { fetchProductById } from '../../asyncMock'; // Importa fetchProductById desde asyncMock
import ItemDetail from '../ItemDetail';

const ItemDetailContainer = ({ match }) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getItemDetail = async () => {
            try {
                const fetchedProduct = await fetchProductById(match.params.itemId);
                setProduct(fetchedProduct);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching product detail:', error);
                setError(error);
                setLoading(false);
            }
        };

        getItemDetail();
    }, [match.params.itemId]);

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            {product && (
                <ItemDetail
                    id={product.id}
                    name={product.name}
                    img={product.image}
                    description={product.description}
                    categoria={product.category}
                    precio={product.precio}
                    stock={product.stock}
                />
            )}
        </div>
    );
}

export default ItemDetailContainer;
