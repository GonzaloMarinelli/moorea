import React, { useState } from 'react';

export default function ItemCount({ stock }) {
    const [count, setCount] = useState(1);

    const verifyAdd = () => {
        if (count >= 1 && count < stock) {
            onAdd();
        }
    }
    const verifyRemove = () => {
        if (count > 1) {
            onRemove();
        }
    }
    const onAdd = () => {
        setCount(count + 1);
    }
    const onRemove = () => {
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
