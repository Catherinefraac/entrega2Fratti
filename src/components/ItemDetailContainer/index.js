import React, {useState, useEffect}from 'react';
import ItemDetail from '../ItemDetail';
import { useParams } from "react-router-dom";

const product = [
    { id: 1, price: 100, image: "./imgr/Aperol.png", title:"Aperol", category: 'Bebidasconalcohol',},
    { id: 2, price: 150, image: "./imgr/Daiquiri.png", title:"Daiquiri", category: 'Bebidasconalcohol'},
    { id: 3, price: 200, image: "./imgr/Martini.png", title:"Martini", category: 'Bebidasconalcohol'},
    { id: 4, price: 50, image: "./imgr/limonada.png", title: "Limonada", category: 'Bebidassinalcohol'},
    { id: 5, price: 70, image: "./imgr/pinacolada.png", title: "Piña colada", category: 'Bebidassinalcohol'},
    { id: 6, price: 90, image: "./imgr/jugodenaranja.png", title: "Jugo de naranja", category: 'Bebidassinalcohol'},

];

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    const {detalleId} = useParams ();

useEffect (() => {
    const getData = new Promise (resolve => {
        setTimeout (() => {
            resolve (product);
        }, 1000);
    });
    getData.then(res => setData (res.find(product => product.id === parseInt(detalleId))));
}, [])

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;