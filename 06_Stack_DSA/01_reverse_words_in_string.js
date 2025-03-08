// Oues 1: Given an input string s, reverse the order of the words

// Input: "the sky is blue"        ----->>>>       Output: "blue is sky the"
// Input: "  hello world  "        ----->>>>       Output: "world hello"
// Input: "a good   example"       ----->>>>       Output: "example good a"


// T - O(n)
// S - O(n)
const reverseWords = function (s) {
    const splits = s.split(" ");
    const stack = [];

    for (let i of splits){
        stack.push(i);
    }

    let finals = "";

    while(stack.length){
        const current = stack.pop();

        if(current){
            finals += " " + current;
        }
    }

    return finals.trim();
};

console.log(reverseWords("the sky is blue"));
console.log(reverseWords("a good   example"));

