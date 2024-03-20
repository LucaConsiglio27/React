import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lacteos from '../src/components/Lacteos';
import Postres from '../src/components/Postres';
import Nosotros from '../src/components/Nosotros';
import NavBar from '../src/components/NavBar';
import ItemListContainer from '../src/components/Containers/ItemListContainer'; // Agregué la importación faltante
import ItemDetailContainer from '../src/components/Containers/ItemDetailContainer';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <NavBar />
                <Routes>
                    <Route path="/" element={<h1>Bienvenido a la página de inicio</h1>} />
                    <Route path="/nosotros" element={<Nosotros />} />
                    <Route path="/lacteos" element={<Lacteos />} />
                    <Route path="/postres" element={<Postres />} />
                    <Route path="/category/:categoryId" element={<ItemListContainer />} /> {/* Corregí el nombre del componente */}
                    <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
