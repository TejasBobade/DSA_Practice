// 03_two_sum.js
// Easy
// 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:  Input: nums = [2,7,11,15], target = 9   Output: [0,1]   Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:  Input: nums = [3,2,4], target = 6   Output: [1,2]
// Example 3:  Input: nums = [3,3], target = 6 Output: [0,1]
 
// Constraints:
// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
 
// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?


// 1. Brut Force
// T - O(n^2)
// S - O(n)
function twoSumBrut(nums, target){
    let n = nums.length;
    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            if(target === (nums[i] + nums[j])){
                let output = [i, j];
                return output;
            };
        };
    };
    return -1;
};

// console.log(twoSumBrut([2,5,5,11], 10));

// 2. Optimized Solution
function twoSumOptimized(nums,target){

    let obj = {};

    for (let i = 0; i < nums.length; i++) {
        let n = nums[i]

        if(obj[target - n] >= 0) {
            return[obj[target - n], i];
        } else {
            obj[n] = i;
        }
    }

};

// console.log(twoSumOptimized([2,5,5,11], 10));


// 3. Hash Map (One Pass)
// T - O(n)
// S - O(n)
function twoSum(nums, target) {
    const prevMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (prevMap.has(diff)) {
            return [prevMap.get(diff), i];
        }

        prevMap.set(nums[i], i);
    }

    return [];
}

console.log(twoSum([2,5,5,11], 10));

