/**
 * @description A function that calculates the sum of all numbers from 1 up to (and including) some number n.
 *
 * @param {number} n - The number to calculate the sum up to.
 *
 * @returns {number} The sum of all numbers from 1 up to (and including) some number n.
 */
const addUpTo = (n) => (n * (n + 1)) / 2;

let t1 = performance.now();
console.log(addUpTo(6)); // 21
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`); // 0.002326751708984375
