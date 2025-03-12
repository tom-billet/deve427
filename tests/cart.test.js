import { expect, test, vi } from "vitest";
import { getCart } from "../app/cartTest.js";

test("should return []", () => {
    vi.stubGlobal('localStorage', { //Remplace localStorage
        getItem: () => { //Le getItem retourne null
          return null;
        },
      });
    expect(getCart()).toEqual([]); //Alors on s'attend à ce que products soit une liste vide
});

