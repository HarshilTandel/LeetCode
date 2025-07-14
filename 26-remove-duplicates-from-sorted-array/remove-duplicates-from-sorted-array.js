var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let x = 0; 

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[x]) {
            x++;
            nums[x] = nums[i];
        }
    }

    return x + 1;
};
