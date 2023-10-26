import React, {useEffect, useState} from "react";
import Title from '../Title';
// import ItemCount from '../ItemCount';
import ItemList from '../ItemList';
import ItemDetail from '../ItemDetail';


const product = [
    { id: 1, image: "./imgr/Aperol.png", title:"Aperol", price: "10"},
    { id: 2, image: "./imgr/Daiquiri.png", title:"Daiquiri", price: "20"},
    { id: 3, image: "./imgr/Martini.png", title:"Martini", price: "30"},

];

export const ItemListContainer = ({ texto }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const onProductSelect = (product) => { 
        setSelectedProduct(product);
    };

    // const onAdd = (quantity) => {
    //     console.log(`Compraste ${quantity} unidades de ${selectedProduct.title}`);
    // }

    return (
        <>
            <Title greeting={texto} />
            {/* <ItemCount initial={1} stock={5} onAdd={onAdd} /> */}
            {product && <ItemList data={product} onProductSelect={onProductSelect} />}
            {selectedProduct && <ItemDetail data={selectedProduct} />}
        </>
    );
}

export default ItemListContainer;