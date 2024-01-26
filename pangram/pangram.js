//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (frase) => {
  frase = frase.toLowerCase();

  const alfabeto = "abcdefghijklmnopqrstuvwxyz".split('')

  return alfabeto.every(letra => frase.includes(letra))
};
