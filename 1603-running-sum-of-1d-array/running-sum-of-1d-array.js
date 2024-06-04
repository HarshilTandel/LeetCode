/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
        let ans=0;
    let farr=[];
    for(i=0;i<nums.length;i++){
        ans=ans+nums[i];
        farr.push(ans);
    }
    return farr;
};