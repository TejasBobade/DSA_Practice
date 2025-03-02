// Ques 1: Implement Linear Search in JS
// Write a function to search "target" in nums. If target exists, then return its index. Otherwise, return -1. You must write an algorithm with 
// O(n) runtime complexity.

// Input: nums = [4,5,6,7,0,1,2], target = 0     ----->>>>>  Output: 4
// Input: nums = [4,5,6,7,0,1,2], target = 3     ----->>>>>  Output: -1

// T - O(n)
// S - O(1)
const linearSearch = (nums,target) => {
    for(let i =0; i < nums.length; i++){
        if(target === nums[i]){
            return i;
        };
    };
    return -1;
};

// console.log(linearSearch([4,5,6,7,0,1,2], 0));


// Global Linear Search
// T - S - O(n)
const linearSearchGlobal = (nums,target) => {
    const result = [];
    for(let i =0; i < nums.length; i++){
        if(target === nums[i]){
            result.push(i);
        };
    };
    if(result.length === 0) retuen -1;
    return result;
};

console.log(linearSearchGlobal([4,5,6,7,0,1,2,0,7,9,0], 0));

