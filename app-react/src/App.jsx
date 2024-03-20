// Importa los componentes necesarios
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lacteos from '../src/components/Lacteos';
import Postres from '../src/components/Postres';
import Nosotros from '../src/components/Nosotros';
import NavBar from '../src/components/NavBar';
import ItemListContainer from '../src/components/Containers/ItemListContainer';
import ItemDetailContainer from './components/Containers/ItemDetailContainer';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} /> 
                    <Route path="/nosotros" element={<Nosotros />} />
                    <Route path="/lacteos" element={<Lacteos />} />
                    <Route path="/postres" element={<Postres />} />
                    <Route path="/category/:categoryId" element={<ItemListContainer />} />
                    <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
