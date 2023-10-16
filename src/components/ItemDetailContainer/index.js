import React, {useState, useEffect}from 'react';
import ItemDetail from '../ItemDetail';

const product = {id: 1, image: "./imgr/Aperol.png", title:"Aperol", price: "10"};

export const ItemDetailContainer = () => {

    const [data, setData]= useState ({});

    useEffect (() => {
        const getData = new Promise (resolve => {
            setTimeout(() => {
                resolve(product);
            }, 4000);
        });
        getData.then(res => setData(res));
    }, [])

    return (
       <ItemDetail data={data}/>
    );
}

export default ItemDetailContainer;