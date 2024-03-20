import React from 'react';
import ItemCount from "./ItemCount";
import '../components/css/ItemDetail.css';

const ItemDetail = ({ id, name, img, description, categoria, precio, stock }) => {
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="Itemheader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="itemImg" />
            </picture>
            <section>
                <p className="Info">
                    id: {id}
                </p>
                <p className="Info">
                    name: {name}
                </p>
                <p className="Info">
                    img: {img}
                </p>
                <p className="Info">
                    descripcion: {description}
                </p>
                <p className="Info">
                    categoria: {categoria}
                </p>
                <p className="Info">
                    precio: {precio}
                </p>
                <p className="Info">
                    stock: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('cantidad agregada')} />
            </footer>
        </article>
    );
}

export default ItemDetail;
