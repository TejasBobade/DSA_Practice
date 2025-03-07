//  Ques 6: Implement Quick Sort in JS
// Write function to sort the given array nums in ascending order.

// Input: nums = [8,3,5,4,7,6,1,2]      ----->>>>>  Output: [1,2,3,4,5,6,7,8]

// T -B,A-> O(nlog n), W-> O(n ^ 2)
// S - A-> O(log n), W-> O(n)
function quickSort(arr) {
    if(arr.length <= 1) return arr;

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        };
    };

    return [...quickSort(left),pivot,...quickSort(right)];
};

console.log(quickSort([8,3,5,4,7,6,1,2]));
