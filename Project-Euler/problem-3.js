/**
 * @description A function that returns the largest prime factor of a given number.
 *
 * @param {number} number
 *
 * @returns {number} The largest prime factor of the given number.
 */
const largestPrimeFactor = (number) => {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      number = number / i;
    }
  }

  return number;
};

console.log(largestPrimeFactor(13195)); // 29
console.log(largestPrimeFactor(600851475143)); // 6857
