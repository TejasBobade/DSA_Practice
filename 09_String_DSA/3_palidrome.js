// Ques 2 - Palindrome Number
// An interger is a palindrome when it reads the same forward and backward.

// Input: x = 121   ----->>>>>  Output: true
// Input: x = 10    ----->>>>>  Output: false

const isPalindrome = function (x) {
    return x<0 ? fasle : x === +x.toString().split("").reverse().join("");
};

console.log(isPalindrome(121));
