function CartItem({ product }) {
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
                <p className="prix">{product.price}€</p>
              </div>
            </div>
          </div>
    )
}

export default CartItem