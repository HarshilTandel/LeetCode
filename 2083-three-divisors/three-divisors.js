/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
  let count = 0; 
    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            count++; 
            if (count > 3) {
                return false; 
            }
            if (i !== n / i) {
                count++;
            }
        }
    }
    
    return count === 3;
};