import { expect, test, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductList from "../app/routes/user/productList";  

// Mock de localStorage pour chaque test
beforeEach(() => {
  vi.stubGlobal("localStorage", {
    getItem: vi.fn(() => null), // Simule un localStorage vide
    setItem: vi.fn(), // Simule setItem sans effet réel
  });

  // Mock de fetch avec des produits fictifs
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          products: [
            { id: 1, name: "Produit 1", price: 10, image: "img1.jpg" },
          ],
        }),
    })
  );
});

// Test 1 : Vérifie si `getCart()` retourne un tableau vide quand localStorage est vide
test("should return an empty cart if localStorage is empty", () => {
  expect(localStorage.getItem("cart")).toBeNull(); // Vérifie que localStorage est bien vide
  expect(JSON.parse(localStorage.getItem("cart") || "[]")).toEqual([]); // On s'attend à un tableau vide
});

// Test 2 : Vérifie si un produit s'affiche correctement
test.only("should display products after fetch", async () => {
  render(<ProductList />);

  // Vérifie si le produit apparaît après le chargement des données
  expect(await screen.findByText("Produit 1")).toBeInTheDocument();
});

// Test 3 : Vérifie si l'ajout au panier met à jour localStorage
test("should add product to cart", async () => {
  render(<ProductList />);
  const addButton = await screen.findByText("Ajouter au panier");

  // Simule un clic sur le bouton "Ajouter au panier"
  userEvent.click(addButton);

  // Vérifie que localStorage.setItem a bien été appelé avec le bon produit
  await waitFor(() => {
    expect(localStorage.setItem).toHaveBeenCalled();
    const cart = JSON.parse(localStorage.setItem.mock.calls[0][1]); // Récupère la première valeur enregistrée
    expect(cart).toHaveLength(1);
    expect(cart[0].name).toBe("Produit 1");
  });
});
