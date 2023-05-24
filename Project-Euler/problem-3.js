/**
 * @description A function that returns the largest prime factor of a given number.
 *
 * @param {number} number
 *
 * @returns {number} The largest prime factor of the given number.
 */
const largestPrimeFactor = (number) => {
  let largestFactor = number;

  for (let i = 2; i <= Math.sqrt(largestFactor); i++) {
    if (!(largestFactor % i)) {
      let factor = largestFactor / i;
      let candidate = largestPrimeFactor(factor);

      return i > candidate ? i : candidate;
    }
  }

  return largestFactor;
};

console.log(largestPrimeFactor(8)); // 29
console.log(largestPrimeFactor(600851475143)); // 6857
