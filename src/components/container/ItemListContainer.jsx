import React, { useState } from 'react';
import ItemCount from '../ItemCount';
import Item from '../Item';


const items = [
    {id:1, title:"Remera", img:"{remera1.png}", price:200, stock:5 },
    {id:2, title:"Pantalon", img:"", price:125, stock:4 },
    {id:3, title:"Gorro", img:'../img/gorro1.png', price:275, stock:3 }
];

export const ItemListContainer = ({titulo}) => {
    return (
        <>
            <h2>{titulo}</h2>
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </>
    )
}

const onAdd = (valor) => {
    console.log(valor);
}

export const ItemList = () =>{
    const [item, setItem] = useState([])
    getFetch.then( res => {
        setItem(res)
    }).catch(err => console.log(err))
    .finally()
    return (
        item.map((i) => <Item key={i.id} item={i}/>)
    )
}

const getFetch = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(items);
    }, 2000);
})