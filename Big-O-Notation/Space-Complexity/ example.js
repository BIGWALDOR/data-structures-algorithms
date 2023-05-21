/**
 * @description Function that calculates the sum of all numbers within a given array.
 *
 * @example This function is O(1) space complexity because the amount of memory it takes up is constant, regardless of the size of the input.
 *
 * @param {number[]} arr - The array of numbers to calculate the sum of.
 *
 * @returns {number} The sum of all numbers within a given array.
 */
const sum = (arr) => {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total;
};

console.log(sum([1, 2, 3, 4, 5])); // 15

/**
 * @description Function that doubles all values within a given array.
 *
 * @example This function is O(n) space complexity because the amount of memory it takes up is proportional to the size of the input.
 *
 * @param {number[]} arr - The array of numbers to double.
 *
 * @returns {number[]} The array of numbers with all values doubled.
 */
const double = (arr) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }

  return newArr;
};

console.log(double([1, 2, 3])); // [2, 4, 6]
