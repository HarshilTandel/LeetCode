/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
    if (nums.length === 0) {
        return [];
    }
    var arr = []
    var count = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                count++
            }
        }
        arr.push(count)
        count = 0
    }
    return arr
};