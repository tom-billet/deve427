import { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/produits.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Erreur de chargement des produits:", error));
  }, []);

  return (
    <div className="p-6">
      <h1 className="h1">Liste des Produits</h1>
      <div className="grid">
        {products.map((product) => (
          <div key={product.id} className="p-4">
            <div className="flex">
              <img 
                src={product.image} 
                alt={product.name} 
                className="img"
              />
              <h2 className="h2">{product.name}</h2>
              <div className="descriptif">
                <p className="description">{product.description}</p>
                <p className="prix">{product.price}€</p>
                <p className="stock">Stock: {product.quantity}</p>
              </div>
            </div>
            <button className="ajoutPanier">Ajouter au panier</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;