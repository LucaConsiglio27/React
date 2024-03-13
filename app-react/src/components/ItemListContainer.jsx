// ItemListContainer.jsx
import React from 'react';
import './ItemListContainer.css';

export default function ItemListContainer({ greeting }) {
    return (
        <>
            <section>
                <h2 className="greeting">{greeting}</h2>
            </section>
        </>
    );
}
