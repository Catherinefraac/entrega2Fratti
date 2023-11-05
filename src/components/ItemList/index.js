import React from 'react';

const ItemList = ({ data, onProductSelect }) => {
    return (
        <div>
            {data.map((product) => (
                <div key={product.id} onClick={() => onProductSelect(product)}>
                    <img src={product.image} alt={product.title} />
                    <p>{product.title}</p>
                </div>
            ))}
        </div>
    );
}

export default ItemList;

