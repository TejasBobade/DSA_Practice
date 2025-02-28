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

console.log(fib(6));
