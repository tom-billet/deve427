import React, { useState, useEffect } from 'react'
import CartItems from '../../components/CartItems';
import Navbar from "../../components/Navbar";
import '../../app.css';

export default function Cart() {
    const [items, setItems] = useState(() => {
        // Essayer de récupérer les produits depuis le localStorage
        const products = localStorage.getItem('cart');
    
        //Si des produits sont stockés, on les récupère, sinon on prend un tableau vide
        return products ? JSON.parse(products) : [];
    });

    console.log(items)

    return (
        <>
        <Navbar/>
        <div>
            <h1>Panier</h1>

            <CartItems products={items}/>

            <button>Payer</button>
        </div>
        </>
    )
}