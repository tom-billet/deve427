export function getCart() {
    const products = localStorage.getItem('cart');
    try {
        return products ? JSON.parse(products) : [];
    } catch (error) {
        return []; // Retourner un tableau vide en cas d'erreur
    }
}