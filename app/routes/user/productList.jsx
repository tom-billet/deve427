import Products from '../../components/Products';

import { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/produits.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Erreur de chargement des produits:", error));
  }, []);

  const [items, setItems] = useState(() => {
    // Essayer de récupérer les produits depuis le localStorage
    const cartItems = localStorage.getItem('cart');

    //Si des produits sont stockés, on les récupère, sinon on prend un tableau vide
    return cartItems ? JSON.parse(cartItems) : [];
  });

  const addCart = (idProduct) => {
    const product = products.find(product => product.id === idProduct);
    //On ajoute à tasks la nouvelle task grâce à la syntaxe de décomposition
    const updatedCart = [...items, product];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }

  return (
    <div className="p-6">
      <h1 className="h1">Liste des Produits</h1>
      <Products products={products} addCart={addCart} />
    </div>
  );
};

export default ProductList;