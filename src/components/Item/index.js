import './Item.css';
import React from 'react';

const Item = ({info, onClick}) => {
    return (
        <a href='' className='product'>
            <img src={info.image} alt="" />
            <p>{info.title}</p>
            <p>{info.price}</p>
        </a>
    );
}

export default Item;