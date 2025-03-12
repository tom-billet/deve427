import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import "./app.css";

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
      <h1 className="text-3xl font-bold text-center mb-6">Liste des Produits</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="p-4 shadow-lg rounded-lg flex flex-col">
            <CardContent className="flex flex-col items-center">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-32 h-32 object-cover mb-4 rounded"
              />
              <h2 className="text-xl font-bold text-center">{product.name}</h2>
              <div className="text-center mt-2">
                <p className="text-gray-600">{product.description}</p>
                <p className="text-green-500 font-semibold mt-2">{product.price}€</p>
                <p className="text-sm text-gray-500">Stock: {product.quantity}</p>
              </div>
            </CardContent>
            <Button className="mt-auto self-end">Ajouter au panier</Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductList;