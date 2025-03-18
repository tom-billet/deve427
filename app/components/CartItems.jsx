import CartItem from './CartItem';

function CartItems({ products }) {
    return (
        <div className="grid">
            {products.map((product) => (
                <CartItem key={product.id} product={product} />
            ))}
        </div>
    )
}

export default CartItems