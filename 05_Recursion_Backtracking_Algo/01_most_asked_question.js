// Most Asked Recursion Question for DSA Interviews

// Factorial of n
function factorial(n) {
    if(n === 0){
        return 1;
    }else {
        return n * factorial(n - 1);
    }
   
}

// console.log(factorial(5));


// Ques 2: Create an array with range of numbers
// Input: start = 1, end = 5    ----->>>>> Output:

function rangeOfNumbers(startNum, endNum){
    if(endNum < startNum){
        return [];
    }else{
        const numbers =  rangeOfNumbers(startNum, endNum - 1);
        numbers.push(endNum);
        return numbers;
    }
}

// console.log(rangeOfNumbers(1, 5));


// Given an interger x, return true if x is a palindrome, and false otherwise.
// Input: x = 121       ----->>>>> Output: true
// Homw Work Ques















// Ques 4 - Fibonacci Number
// Fibonacci Series -> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233 ...
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n -2), for n > 1
// Input: n = 3     ----->>>>> Output: 2

function fib(n) {
    if(n <= 1) return n;
    return fib(n - 1) + fib(n -2);
}

// console.log(fib(6));



// Oues 5 - Reverse a String
// Input: "Hello"   ------>>>>> Output: "olleh"

function reverseString(str) {
    if(str === ""){
        return "";
    }
    return reverseString(str.substr(1)) + str.charAt(0);
}

// console.log(reverseString("hello"));



// Ques 6 - Subsets ( Backtracking Algorithm using Recursion )
// Given an interger array nums of unique elements, return all possible subsets ( the power set ).
// The solution set must not contain duplicate subsets. Return the solution in any order.

// Input: [1,2,3]   ----->>>>>  Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Input: [0]       ----->>>>>  Output: [[],[0]]

function subsets(nums) {
    let result = [];
    let temp = [];

    function recursiveSubsets (nums, i){
        if(i === nums.length){
            return result.push([...temp]);
        }
        temp.push(nums[i]);
        recursiveSubsets(nums, i + 1);
        temp.pop();
        recursiveSubsets(nums, i + 1);
    }
    recursiveSubsets(nums,0);
    return result;
}

console.log(subsets([1,2,3]));
