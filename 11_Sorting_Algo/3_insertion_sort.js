// Ques 3: Implement Insertion Sort in JS
// Write a function to sort the given array nums in ascending order.

// Input: nums = [29,10,14,37,14,33,8,11]   ----->>>>>  Output: [8,10,11,14,14,29,33,37]

// T - B-> O(n) , A,W->O(n^2)
// S - O(1)
function insertionSort(arr){
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        const key = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > key){
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }

    return arr;
}

console.log(insertionSort([29,10,14,37,14,33,8,11]));
