import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../asyncMock';
import Item from './Item';
import './css/Postres.css'

const Postres = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getPostres = async () => {
            try {
                const allProducts = await fetchProducts();
                const postresProducts = allProducts.filter(product => product.category === 'Postres');
                setProducts(postresProducts);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching postres products:', error);
                setError(error);
                setLoading(false);
            }
        };

        getPostres();
    }, []);

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="postres-container"> {/* Utiliza la clase postres-container */}
            <h2>Productos de Postres</h2>
            <div className="products-container"> {/* Utiliza la clase products-container */}
                {products.map(product => (
                    <div className="product" key={product.id}> {/* Utiliza la clase product */}
                        <Item
                            id={product.id}
                            name={product.name}
                            img={product.image}
                            price={product.precio}
                            stock={product.stock}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Postres;
