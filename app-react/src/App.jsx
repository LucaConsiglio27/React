// En App.jsx

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lacteos from '../src/components/Lacteos';
import Postres from '../src/components/Postres';
import Nosotros from '../src/components/Nosotros';
import NavBar from '../src/components/NavBar';
import ItemListContainer from '../src/components/Containers/ItemListContainer';
import ItemDetailContainer from '../src/components/Containers/ItemDetailContainer';
import './App.css'; // Importar el archivo CSS


const App = () => {
    return (
        <BrowserRouter>
            <div>
                <NavBar />
                <Routes>
                    <Route path="/" element={<h1 className='titulo'>Bienvenido a Pistaccio SuperOnline</h1>} />
                    <Route path="/nosotros" element={<Nosotros />} />
                    <Route path="/lacteos" element={<Lacteos />} />
                    <Route path="/postres" element={<Postres />} />
                    <Route path="/category/:categoryId" element={<ItemListContainer />} />
                    <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
