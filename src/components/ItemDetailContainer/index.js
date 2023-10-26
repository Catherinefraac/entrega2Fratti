import React, {useState, useEffect}from 'react';
import ItemDetail from '../ItemDetail';

export const ItemDetailContainer = ({ selectedProduct }) => {
    return (
        <ItemDetail data={selectedProduct} />
    );
}

export default ItemDetailContainer;