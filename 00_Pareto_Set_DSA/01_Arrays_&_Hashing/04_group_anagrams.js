// Medium
// Group Anagrams
// Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.
// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:   Input: strs = ["act","pots","tops","cat","stop","hat"]  Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
// Example 2:   Input: strs = ["x"]     Output: [["x"]]
// Example 3:   Input: strs = [""]      Output: [[""]]

// Constraints:
// 1 <= strs.length <= 1000.
// 0 <= strs[i].length <= 100
// strs[i] is made up of lowercase English letters.

// 1. 
function groupAnagrams(strs) {
    let group = [];
    for(let i = 0; i < strs.length; i++){

        if(strs.length > 1){
            for(let j = i + 1; j < strs.length; j++){
                if(strs[i].length === strs[j].length){
                    if(strs[i].split("").sort().join("") === strs[j].split("").sort().join("")){
                        group.push([strs[i], strs[j]]);
                    }
                }
            }
        }
        
    }
    return group;
};

console.log(groupAnagrams(["act","pots","tops","cat","stop","hat"]));
