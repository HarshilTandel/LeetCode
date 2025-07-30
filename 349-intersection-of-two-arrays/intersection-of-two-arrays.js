/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let store = new Set();
    let result = [];

    for (let i = 0; i < nums2.length; i++) {
        store.add(nums2[i]);
    }

    for (let j = 0; j < nums1.length; j++) {
        if (store.has(nums1[j])) {
            result.push(nums1[j]);
        }
    }

    return [...new Set(result)]; 
};
