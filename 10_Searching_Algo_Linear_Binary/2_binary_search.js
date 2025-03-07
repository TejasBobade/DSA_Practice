// Ques 2: Implement Binary Search in JS
// Given an array of integer nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exits, then return it's index. Otherwise, return -1. You must write an algorithm with O(log n) runtime complexity.

// Input: nums = [-1,0,3,5,9,12], target = 9     ----->>>>>  Output: 4
// Input: nums = [-1,0,3,5,9,12], target = 2     ----->>>>>  Output: -1

// More Efficient and Optimized than linear search
// Algo with Time Complexity of O(log n)
// Needed Sorted Array

// T - O(log n)
// S - O(1)
function search(nums, target){
    let start = 0;
    let end = nums.length -1;

    while(start <= end){
        let middle = Math.floor((start + end) / 2);

        if (nums[middle] === target){
            return middle;
        }else if(nums[middle] < target){
            start = middle + 1;
        }else{
            end = middle - 1;
        };
    }
};

// console.log(search([-1,0,3,5,9,12], 9));


