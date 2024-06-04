/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
        let totalSum = nums.reduce((acc,num)=>acc+num,0);
    let leftSum=0;
    for(i=0;i<nums.length;i++){
        let rightSum = totalSum -  nums[i] - leftSum;
        if(leftSum==rightSum){
            return i;
        }
           leftSum += nums[i]
    }
    return -1
};