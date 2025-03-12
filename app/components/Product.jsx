function Product({ product, addCart }) {

    return (
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
            <button className="ajoutPanier" onClick={() => addCart(product.id)}>Ajouter au panier</button>
          </div>
    )
}

export default Product