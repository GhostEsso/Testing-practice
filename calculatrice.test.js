const Calculatrice = require("./calculatrice");

describe("Calculatrice - Méthode additionner", () => {
  const calculatrice = new Calculatrice();

  test("Effectue une addition de deux nombres positifs", () => {
    expect(calculatrice.additionner(2, 3)).toBe(5);
  });

  test("Effectue une addition avec un nombre positif et un nombre négatif", () => {
    expect(calculatrice.additionner(5, -3)).toBe(2);
  });

  test("Effectue une addition avec deux nombres négatifs", () => {
    expect(calculatrice.additionner(-7, -2)).toBe(-9);
  });
});

describe("Calculatrice - Méthode soustraire", () => {
  const calculatrice = new Calculatrice();

  test("Effectue une soustraction de deux nombres positifs", () => {
    expect(calculatrice.soustraire(7, 3)).toBe(4);
  });

  test("Effectue une soustraction avec un nombre positif et un nombre négatif", () => {
    expect(calculatrice.soustraire(5, -3)).toBe(8);
  });

  test("Effectue une soustraction avec deux nombres négatifs", () => {
    expect(calculatrice.soustraire(-7, -2)).toBe(-5);
  });
});

describe("Calculatrice - Méthode diviser", () => {
  const calculatrice = new Calculatrice();

  test("Effectue une division de deux nombres positifs", () => {
    expect(calculatrice.diviser(10, 2)).toBe(5);
  });

  test("Effectue une division avec un nombre positif et un nombre négatif", () => {
    expect(calculatrice.diviser(12, -3)).toBe(-4);
  });

  test("Lève une erreur si on divise par zéro", () => {
    expect(() => {
      calculatrice.diviser(10, 0);
    }).toThrow("La division par zéro n'est pas autorisée.");
  });
});

describe("Calculatrice - Méthode multiplier", () => {
  const calculatrice = new Calculatrice();

  test("Effectue une multiplication de deux nombres positifs", () => {
    expect(calculatrice.multiplier(4, 3)).toBe(12);
  });

  test("Effectue une multiplication avec un nombre positif et un nombre négatif", () => {
    expect(calculatrice.multiplier(5, -3)).toBe(-15);
  });

  test("Effectue une multiplication avec deux nombres négatifs", () => {
    expect(calculatrice.multiplier(-2, -5)).toBe(10);
  });
});
