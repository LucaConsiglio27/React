import React, { useEffect, useState } from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ProductCard from './components/ProdCard';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Creación de la promesa
    const productPromise = new Promise((resolve) => {
      setTimeout(() => {
        const productsData = [
          { id: '1', name: 'Manteca Sancor', image: 'manteca.jpg', description: 'Manteca', stock: 10 },
          { id: '2', name: 'Crema Sancor', image: 'cremaleche.jpg', description: 'Crema Grande', stock: 13 },
          { id: '3', name: 'Leche La Serenisima', image: 'lecheserenisima.jpg', description: 'Sachet La Serenisima', stock: 15 },
          { id: '4', name: 'Flan Sancor', image: 'flansancor.jpg', description: 'Flanes chicos', stock: 5 },
          { id: '5', name: 'Yogurt LS', image: 'yogurtchiquito.jpg', description: 'Yogurt Chico', stock: 15 },
          { id: '6', name: 'Leche Bebe Sancor', image: 'lechebebe.jpg', description: 'Leche Bebe', stock: 15 },
          { id: '7', name: 'Queso Cremoso LS', image: 'quesocremoso.jpg', description: 'Descripción del producto 7', stock: 12 },
          { id: '8', name: 'Yogurt Griego LS', image: 'yogurtgriego.jpg', description: 'Descripción del producto 8', stock: 8 },
          { id: '9', name: 'Dulce De Leche LS', image: 'ddl.jpg', description: 'Descripción del producto 9', stock: 15 },
        ];
        resolve(productsData);
      }, 2000); // Resuelve la promesa después de 2 segundos
    });

    // Ejecución de la promesa
    productPromise.then((productsData) => {
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
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
