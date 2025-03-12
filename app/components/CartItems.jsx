import CartItem from './CartItem';

function CartItems({ products }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
                <CartItem key={product.id} product={product} />
            ))}
        </div>
    )
}

export default CartItems