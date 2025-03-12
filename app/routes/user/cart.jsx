import React, { useState, useEffect } from 'react'
import CartItems from '../../components/CartItems';

export default function Cart() {
    const [items, setItems] = useState(() => {
        // Essayer de récupérer les produits depuis le localStorage
        const products = localStorage.getItem('cart');
    
        //Si des produits sont stockés, on les récupère, sinon on prend un tableau vide
        return products ? JSON.parse(products) : [];
    });

    return (
        <div>
            <h1>Panier</h1>

            <CartItems products={items}/>

            <button>Payer</button>
        </div>
    )
}