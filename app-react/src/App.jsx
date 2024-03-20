// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lacteos from '../src/components/Lacteos';
import Postres from '../src/components/Postres';
import Nosotros from '../src/components/Nosotros';
import NavBar from '../src/components/NavBar';

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
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
