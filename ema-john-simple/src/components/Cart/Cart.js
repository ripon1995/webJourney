import React from 'react';

const Cart = (cartData) => {
    const cart=cartData.cart;

    const total=cart.reduce((total,product)=>total+product.price,0);
    let shippingCost=0;
    if(total>35){
        shippingCost=0;
    }
    else if(total>15){
        shippingCost=25;
    }
    else if(total>0){
        shippingCost=50;
    }
    
    const tax=(total/10).toFixed(2);
    const grandTotal=(total+shippingCost+Number(tax)).toFixed(2);

    return (
        <div>
            <h1>Order Summary</h1>
            <h2>Items ordered: {cart.length}</h2>
            <h2>Product price: {total.toFixed(2)}</h2>
            <h2>Shipping cost: {shippingCost}</h2>
            <h2>Tax+Vat: {tax}</h2>
            <h2>Total price: {grandTotal}</h2>
        </div>
    );
};

export default Cart;