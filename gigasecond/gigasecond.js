//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const giga = 1e12;

export const gigasecond = (input) => {
  return new Date(input.getTime() + giga)
};
