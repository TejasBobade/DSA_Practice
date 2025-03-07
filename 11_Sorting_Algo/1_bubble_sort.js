// Ques 1: Implement Bubble Sort in JS
// Write a function to sort the given array nums in ascending order.

// Input: nums = [29,10,14,37,14]   ----->>>>>  Output: [10, 14, 34, 29, 37]

// T - B -> O(n), A -> O(n^2), W-> O(n^2)
// S - O(1)
const bubbleSort = (arr) => {
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n -i -1; j++) {
           if(arr[j] > arr[j + 1]){
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
           }
        }
    }

    return arr;
}

console.log(bubbleSort([29,10,14,37,14]));
