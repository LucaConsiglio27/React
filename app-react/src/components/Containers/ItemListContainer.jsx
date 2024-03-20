// ItemListContainer.jsx
import React from 'react';
import '../css/ItemListContainer.css';

export default function ItemListContainer({ greeting }) {


    return (
        <>
            <section>
                <h2 className="greeting">{greeting}</h2>
            </section>

        
        </>
    );
}