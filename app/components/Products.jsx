import Product from './Product';

function Products({ products, addCart }) {
    return (
        <div className="grid">
            {products.map((product) => (
                <Product key={product.id} product={product} addCart={addCart} idProduct={product.id}/>
            ))}
        </div>
    )
}

export default Products