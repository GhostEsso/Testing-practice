class Calculatrice {
  additionner(a, b) {
    return a + b;
  }

  soustraire(a, b) {
    return a - b;
  }

  diviser(a, b) {
    if (b === 0) {
      throw new Error("La division par zéro n'est pas autorisée.");
    }
    return a / b;
  }

  multiplier(a, b) {
    return a * b;
  }
}

module.exports = Calculatrice;