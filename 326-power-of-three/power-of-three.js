/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n <= 0) return false;           // Rule out zero and negative numbers
    if (n === 1) return true;           // Base case: 3^0 = 1
    if (n % 3 !== 0) return false;      // If not divisible by 3, it can’t be a power of 3
    return isPowerOfThree(n / 3);       // Recursive call with n divided by 3
};
