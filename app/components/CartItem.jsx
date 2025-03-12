function CartItem({ product }) {
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
                    <p className="text-green-500 font-semibold mt-2">{product.price}€</p>
                </div>
            </div>
        </div>
    )
}

export default CartItem