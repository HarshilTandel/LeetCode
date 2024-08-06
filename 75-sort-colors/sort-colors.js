/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let left = 0;
  let index = 0;
  let right = nums.length - 1;

  while (index <= right) {
    if (nums[index] === 0) {

      [nums[left], nums[index]] = [nums[index], nums[left]];
      left++;
      index++;
    } else if (nums[index] === 2) {
    
      [nums[right], nums[index]] = [nums[index], nums[right]];
      right--;
    
    } else {
      index++;
    }
  }

  return nums;

};