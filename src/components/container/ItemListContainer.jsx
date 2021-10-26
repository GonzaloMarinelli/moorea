import React from 'react'
import  ItemCount from '../ItemCount';

export const ItemListContainer = ({titulo}) => {
    return (
        <>
            <h2>{titulo}</h2>
            <ItemCount stock='5' initial='1'/>
        </>
    )
}