// ItemListContainer.jsx
import React from 'react';
import './ItemListContainer.css'; // Importa el archivo de estilos CSS

export default function ItemListContainer({ greeting }) {
    return (
        <>
            <section>
                <h2 className="greeting">{greeting}</h2> {/* Aplica la clase de estilo al mensaje */}
            </section>
        </>
    );
}
