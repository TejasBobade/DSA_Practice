// Ques 3 - Valid Anagram
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.

// Input: (s = "anagram"), (t = "nagaram"); ----->>>  Output: true;
// Input: (s = "rat"), (t = "car");         ----->>>  Output: false;


// Method-1
// const isAnagram = function (s,t) {
//     s= s.split("").sort().join();
//     t= t.split("").sort().join();

//     return s === t;
// }

// console.log(isAnagram("anagram", "nagaram"));

// Method-2
const isAnagram = function (s,t) {
    if (s.length !== t.length) return false;

    let obj1 = {};
    let obj2 = {};

    for (let i =0; i <= s.length; i++){
        obj1[s[i]] = (obj1[s[i]] || 0) + 1;
        obj2[t[i]] = (obj2[t[i]] || 0) + 1;
    }

    for (const key in object) {
        if (obj1[key] !== obj2[key]) return false;
    }

    return true;   
};

console.log(isAnagram("anagram", "nagaram"));


// rat / tar

// {
//     r:1,
//     a:1,
//     t:1,
// }
// {
//     t:1,
//     a:1
//     r:1
// }