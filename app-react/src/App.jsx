// App.jsx

import React, { useState, useEffect } from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar'; 
import ProductCard from './components/ProdCard';
import { fetchProducts } from './asyncMock'; // Importar la función fetchProducts

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Ejecutar la función fetchProducts para obtener los datos de productos
    fetchProducts().then((productsData) => {
        setProducts(productsData);
    });
  }, []);

  useEffect(() => {
    // Esta función se ejecutará cada vez que los productos se actualicen
    console.log("Productos actualizados:", products);
  }, [products]);

  return (
    <>
      <NavBar /> 
      <h1 className='titulo'>Pistaccio Autoservicio</h1>
      <div className="main-content">
        <ItemListContainer className='greeting' greeting="¡Bienvenido a nuestra tienda en línea!" />
      </div>
      <div className="product-container-wrapper">
        {/* Renderizando los productos después de que se resuelve la promesa */}
        <div className="product-container">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              image={product.image}
              description={product.description}
              precio={product.precio}
              stock={product.stock} // Asegúrate de pasar el stock
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
