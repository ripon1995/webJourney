import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    var totalPopulation=0;

    for(let i=0;i<cart.length;i++)
    {
        totalPopulation+=cart[i].population;
    }


    console.log(cart);
    return (
        <div>
            
            <h2>This is cart:{cart.length}</h2>
            <h2>Population: {totalPopulation}</h2>
            
        </div>
    );
};

export default Cart;