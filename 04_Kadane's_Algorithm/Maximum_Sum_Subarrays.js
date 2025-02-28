// Ques 4 - Given an integer array nums, find the subarray with the largest sum, and return it's sum.

// Input: [-2,1,-3,4,-1,2,1,-5,4]   ----->>>>> Output: 6, [4,-1,2,1]
// Input: [5,4,-1,7,8]              ----->>>>> Output: 23, [5,4,-1,7,8]

/*
To be subarray the subarray needs to be continious 
If it is not continious then it is sub collection not an array
*/


// Brut force solution
// T - O(n^2)
// S - O(1)
function maxSubArray(nums) {
    let maxSum = nums[0];
    let startInd = 0;
    let endInd = 0;

    for (let i = 0; i < nums.length; i++) {         //n
        let currentSum = 0;
        for (let j = i; j < nums.length; j++) {     // n
            currentSum = currentSum + nums[j];
            if(currentSum > maxSum) {
                maxSum = currentSum;
                startInd = i;
                endInd = j;
            }
        }
    }

    return {
        sum: maxSum,
        subArray: nums.slice(startInd, endInd + 1)
    };
}

// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));


// Optimized Solution
// T - O(n)
// S - O(1)
function maxSubArrays (nums) {
    let sum = 0;
    let max = nums[0];

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if(sum > max){
            max = sum;
        }
        if(sum < 0){
            sum = 0;
        }
    }

    return max;
}

console.log(maxSubArrays([-2,1,-3,4,-1,2,1,-5,4]));
