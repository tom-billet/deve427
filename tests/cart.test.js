import { expect, test, vi } from "vitest";
import { getCart } from "../app/cartTest.js";

//Test avec localStorage vide
test("should return []", () => {
    vi.stubGlobal('localStorage', { //Remplace localStorage
        getItem: () => { //Le getItem retourne null
          return null;
        },
      });
    expect(getCart()).toEqual([]); //Alors on s'attend à ce que products soit une liste vide
});

//Test avec une erreur de retours
test("should return []", () => {
    vi.stubGlobal('localStorage', { //Remplace localStorage
        getItem: (key) => {
            if (key === 'cart') {
              return "test"; //On ne reçoit pas ce qui est attendu
            }
            return null;
          },
      });
    expect(getCart()).toEqual([]); //Alors on s'attend à ce que products soit une liste vide
});

//Test avec un cas fonctionnel
test("should return products", () => {
    vi.stubGlobal('localStorage', { //Remplace localStorage
        getItem: (key) => {
            if (key === 'cart') {
                return JSON.stringify([
                    {
                        id: 1, name: "Ordi", price: 900, quantity: 10, description: "PC Gaming giga performant",
                        image: "https://boulanger.scene7.com/is/image/Boulanger/4711377247511_h_f_l_0?wid=400&hei=270"
                    }
                ]); //On lui passe un exemple réel pour vérifier que ça fonctionne
            }
            return null;
          },
      });
      expect(getCart()).toEqual([
        {
            id: 1, name: "Ordi", price: 900, quantity: 10, description: "PC Gaming giga performant",
            image: "https://boulanger.scene7.com/is/image/Boulanger/4711377247511_h_f_l_0?wid=400&hei=270"
        }
    ]); //Alors on s'attend à ce que products prenne les données récupérées par getItem
});