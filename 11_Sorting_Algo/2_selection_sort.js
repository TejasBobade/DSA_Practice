// Ques 2: Implement Selection Sort in JS
// Write a function to sort the given array nums in ascending order.

// Input: nums = [29,10,14,37,14]   ----->>>>>  Output: [10,14,14,29,37]

// T - O(n^2)
// S - O(1)
const selectionSort = (arr) => {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        if(minIndex !== i){
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
}

console.log(selectionSort([29,10,14,37,14]));
