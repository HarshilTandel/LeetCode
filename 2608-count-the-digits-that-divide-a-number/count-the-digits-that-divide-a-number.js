/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let count = 0;
    let originalNum = num; 
    while (num > 0) {
        let digit = num % 10;
        num = Math.floor(num / 10); 
        if (digit !== 0 && originalNum % digit == 0) {
            count++;
        }
    } 
    return count;
};
