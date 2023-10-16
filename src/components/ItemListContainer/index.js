import React, {useEffect, useState} from "react";
import Title from '../Title';
import ItemCount from '../ItemCount';
import ItemList from '../ItemList';
import ItemDetailContainer from '../ItemDetailContainer';


const product = [
    { id: 1, image: "./imgr/Aperol.png", title:"Aperol", price: "10"},
    { id: 2, image: "./imgr/Daiquiri.png", title:"Daiquiri", price: "20"},
    { id: 3, image: "./imgr/Martini.png", title:"Martini", price: "30"},

];

export const ItemListContainer = ({texto}) => {
    const [data, setData] = useState ([]);
    
    useEffect (() => {
        const getData = new Promise (resolve => {
            setTimeout(() => {
                resolve(product);
            }, 3000);
        });
        getData.then(res => setData(res));

    }, []);

    const onAdd= (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }

    return (
    <>
       <Title greeting={texto} />
       <ItemCount initial={1} stock= {5} onAdd={onAdd} />
       <ItemList data={data} />
    </>
    );
}

export default ItemListContainer;