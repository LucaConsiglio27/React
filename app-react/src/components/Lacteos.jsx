import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../asyncMock';
import Item from './Item';

const Lacteos = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getLacteos = async () => {
            try {
                const allProducts = await fetchProducts();
                const lacteosProducts = allProducts.filter(product => product.category === 'Lácteos');
                setProducts(lacteosProducts);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching lacteos products:', error);
                setError(error);
                setLoading(false);
            }
        };

        getLacteos();
    }, []);

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h2>Productos de Lácteos</h2>
            <div className="products-container">
                {products.map(product => (
                    <Item
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        img={product.image}
                        price={product.precio}
                        stock={product.stock}
                    />
                ))}
            </div>
        </div>
    );
}

export default Lacteos;
