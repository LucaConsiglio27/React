import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../asyncMock';
import Item from './Item';

const ItemList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProductsData = async () => {
            try {
                const productsData = await fetchProducts();
                setProducts(productsData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        getProductsData();
    }, []);

    return (
        <div className="item-list">
            {loading ? (
                <p>Cargando productos...</p>
            ) : (
                products.map(product => (
                    <Item
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        img={product.image}
                        price={product.precio}
                        stock={product.stock}
                    />
                ))
            )}
        </div>
    );
};

export default ItemList;
