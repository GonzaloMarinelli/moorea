import React from 'react';

const baseURL = "../../"

export default function Item({ item }) {

    return (<div>
        <h2>{item.title}</h2>
        <img src={baseURL + item.img} alt="Imagen del producto" />
        <br />
        <p>Precio {item.price}</p>
        <p>Stock disponible: {item.stock}</p>
    </div>);
}