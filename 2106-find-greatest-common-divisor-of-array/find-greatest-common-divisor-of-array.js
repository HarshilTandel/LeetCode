/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
    nums.sort();
    let a = Math.min(...nums);
    let b = Math.max(...nums);
    while (b != 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
};