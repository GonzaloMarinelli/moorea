import React, { useState } from 'react';

export default function ItemCount({ stock, initial, onAdd }) {
    const [count, setCount] = useState(initial);

    const verifyAdd = () => {
        if (count >= 1 && count < stock) {
            add();
        }
    }
    const verifyRemove = () => {
        if (count > 1) {
            remove();
        }
    }
    const add = () => {
        setCount(count + 1);
        onAdd("valor del hijo: " + count);
    }
    const remove = () => {
        setCount(count - 1);
    }
    const addCarrito = () => {
        alert("Usted compró " + count + " camisas")
    }
    return (<div >
        <h2>Camisa negra</h2>
        <div className="d-flex justify-content-center bd-highlight mb-3">
            <button onClick={verifyRemove}>-</button>
            <div>{count}</div>
            <button onClick={verifyAdd}>+</button>
        </div>
        <button onClick={addCarrito}>Agregar al carrito</button>
    </div>);
}
