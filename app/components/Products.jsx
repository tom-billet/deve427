import Product from './Product';

function Products({ products, addCart }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
                <Product key={product.id} product={product} addCart={addCart} idProduct={product.id}/>
            ))}
        </div>
    )
}

export default Products