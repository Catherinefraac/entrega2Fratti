import React, {useEffect, useState} from "react";
import Title from '../Title';
import ItemCount from '../ItemCount';
import ItemList from '../ItemList';
import ItemDetail from '../ItemDetail';
import { useParams } from "react-router-dom";


const product = [
    { id: 1, image: "./imgr/Aperol.png", title:"Aperol", category: 'Bebidasconalcohol',},
    { id: 2, image: "./imgr/Daiquiri.png", title:"Daiquiri", category: 'Bebidasconalcohol'},
    { id: 3, image: "./imgr/Martini.png", title:"Martini", category: 'Bebidasconalcohol'},
    { id: 4, image: "./imgr/limonada.png", title: "Limonada", category: 'Bebidassinalcohol'},
    { id: 5, image: "./imgr/pinacolada.png", title: "Piña colada", category: 'Bebidassinalcohol'},
    { id: 6, image: "./imgr/jugodenaranja.png", title: "Jugo de naranja", category: 'Bebidassinalcohol'},

];

export const ItemListContainer = ({ texto }) => {
    const [data, setData] = useState([]);

    const {categoriaId} = useParams ();
    console.log(categoriaId);

useEffect (() => {
    const getData = new Promise (resolve => {
        setTimeout (() => {
            resolve (product);
        }, 1000);
    });
    if (categoriaId) {
        getData.then (res => setData(res.filter (product => product.category === categoriaId)));
    } else {
        getData.then (res =>setData(res));
    }
}, [categoriaId])

     const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }

    return (
        <>
            <Title greeting={texto} />
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
            <ItemList data= {data} />
        </>
    );
}

export default ItemListContainer;