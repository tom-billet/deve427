export function getCart() {
    const products = localStorage.getItem('cart');
    return products ? JSON.parse(products) : [];
}