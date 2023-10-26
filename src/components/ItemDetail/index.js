import React from 'react';
import './ItemDetail.css';

export const ItemDetail = ({ data }) => {
    data = data || {};
    

    return (
        <div className="container">
        <div className="detail">
        <img className='detail_image' src={data.image} alt="" />
            <div className="content">
                    <h1>{data.title}</h1>
                    <p>{data.price}</p>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;