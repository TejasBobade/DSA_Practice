// Path - > cd 00_Pareto_Set_DSA , cd 01_Arrays_and_Hashing

// Easy
// Contains Duplicate
// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

// Example 1:  Input: nums = [1, 2, 3, 3]  Output: true

// Example 2:  Input: nums = [1, 2, 3, 4]  Output: false

// 1.
// Brut Force
// T - O(n^2)
// S - O(1)
function containDuplicate(nums){
    for(let i = 0; i < nums.length; i++){
        for(let j = 1; j < nums.length; j++){
            if(nums[i] === nums[j]) return true;
        };
    };

    return false;
};

// console.log(containDuplicate([1, 2, 3, 3]))


// 2.
// Optimized 
// T - O(n)
// S - O(n)
function duplicate(nums){
    let d = [];
    for(let i = 0; i < nums.length; i++){
        if(d.includes(nums[i])) return true;
        d.push(nums[i]);
    };

    return false;
};

// console.log(duplicate([1, 2, 3, 3]));


// 3.
// Sorting
// T - O(n logn)
// S - O(1) , O(n)
function duplicateSort(nums){
    nums.sort((a,b) => a - b);

    for(let i = 1; i < nums.length; i++){
        if(nums[i] === nums[i -1]) return true;
    };

    return false;
};

// console.log(duplicateSort([1, 2, 3, 3]));

// 4.
// Hash Set
// T - O(n)
// S - O(n)
function duplicateSet(nums){
    let seen = new Set();

    for(let num of nums){
        if(seen.has(num)) return true;
        seen.add(num);
    };

    return false;
};

// console.log(duplicateSet([1, 2, 3, 4]));


// 5.
// Hash Set Length
// 

function duplicateHash(nums){
    return new Set(nums).size < nums.length;
}

// console.log(duplicateHash([1, 2, 3, 4]));
