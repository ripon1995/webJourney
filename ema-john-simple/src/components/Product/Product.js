import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (productData) => {
    
    const {img,name,seller,price,stock}=productData.product;
    return (
        <div className="product">
            <div className="product-image">
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h4>{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>Price: ${price}</p>
                <p><small>Only {stock} left in stock</small></p>

                <button onClick={()=>productData.handleCart(productData.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
            </div>
        </div>
    );
};

export default Product;
