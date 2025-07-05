/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Map to store value → its index
    const indexMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        // If complement already seen, we have our answer
        if (indexMap.has(complement)) {
            return [ indexMap.get(complement), i ];
        }
        
        // Otherwise, record this number’s index
        indexMap.set(nums[i], i);
    }
    
    // According to problem constraints, there is always exactly one solution,
    // so we never actually reach here in valid inputs.
    return [];
};
