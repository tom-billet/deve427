function Product({ product, addCart }) {

    return (
        <div key={product.id} className="p-4 shadow-lg rounded-lg flex flex-col bg-white">
            <div className="flex flex-col items-center">
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
            </div>
            <button className="mt-auto self-end bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={() => addCart(product.id)}>Ajouter au panier</button>
        </div>
    )
}

export default Product