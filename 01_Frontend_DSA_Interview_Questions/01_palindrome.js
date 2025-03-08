// Ques 1 - Palindrome Number
//  An integer is a palindrome when it reads the same forward and backward.

//  Input: x= 121 ----->>> Output: true
//  Input: x= 10  ----->>> Output: false


/* Process
first we converte the number into string => x.toString()
we have to split string into array => x.split("")
then we reverse the array so we can use it for check => x.reverse()
we then join the reversed array => x.join()
It is in string format we can change the array we are going to compare in to string or converte this one into number => +x
*/

const isPalindrome = function(x) {
    // Method-1
    return x<0 ? false : (x === (+x.toString().split("").reverse().join("")));

    // Method-2 -> where we used Number object to converte string into number
    // let num = x.toString().split("").reverse().join("");
    // let revNum = Number(num);
    // return x<0 ? false : x === revNum;
}

const res = isPalindrome(12);

console.log(res);
