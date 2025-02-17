// Arrays - Decalaration

// How to declare array
// let arr = new Array();

let person = {
  name: "Tejas",
  age: 24,
};

let arr = ["Apple", "Banana", "Cherry", person];
// console.log(arr[3].name);
// console.log(arr.length);

// Array - Add and Remove Elements
// End of array - push , pop
// Start of array - shift , unshift
// push and pop is more performat than unshift and shift -> So if you are working on big database

// Add to End of the Array
arr.push("orange"); // It's going to add a element at the end of array
// console.log(arr);

// Remove fromEnd of the Array
arr.pop(); // It's going to remove a element from the end of array
// console.log(arr);

// Add to Top of the Array
arr.unshift("orange"); // It's going to add a element at the top of array
// console.log(arr);

// Remove from Top of the Array
arr.shift(); // It's going to remove a element from the top of array
// console.log(arr);

// Looping an Array

// For Loop
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// While Loop
// let i = 0;
// while(i < arr.length) {
//     console.log(arr[i]);
//     i++;
// };

// Inbuilt Loop Methods
const numbers = [1, 2, 3, 4, 5];

// map in JavaScript
// numbers.map((item, index, array) => {
//     console.log(item, index, array);
// })
// const newNums = numbers.map((item, index, array) => {
//     return item + 5;
// });

// filter in JavaScript
// Return every single item that satisfy the condition
// const newNums = numbers.filter((item, index, array) => {
//     return item > 3;
// });

// reduce in JavaScript
// Reduce take an array and reduce it down to one value
const newNums = numbers.reduce((prev, item) => {
  return prev + item;
}, 0); // Here 0 is initial value of prev

// some in JavaScript
// Similar to filter but give result in boolean value (true/false)
// const res = numbers.some((item, index, array) => {
//     return item > 3;
// });

// every in JavaScript
// Similar to filter but it need every elemnt to satisfy the condition to give result in boolean value (true/false)
// const res = numbers.every((item, index, array) => {
//     return item < 10;
// });

// find in JavaScript
// It's going to give us the first elemnt that satify the condition
const res = numbers.find((item, index, array) => {
  return item > 3;
});
// console.log(res);

// Spread and Rest Operators
const nums = [1, 2, 3];
const nums2 = [4, 5, 6, 7];

const finalNums = [...nums, ...nums2]; // Spread Operator
// console.log(finalNums);

// Rest Operator
function sum(...numbers) {
  return numbers;
}

// console.log(sum(nums, nums2, 5, "Hello"));

// More Array Methods

// Concat
// Can be used to add arrays
const newArr = nums.concat(nums2, arr);
// console.log(newArr);

// Slice
// console.log(arr);
const sl = arr.slice(0, 2);
// console.log(sl);

// Splice
// Change the original array
// console.log(arr);
arr.splice(1, 2, "orange");
// console.log(arr);

// Fill
// Replace all the elemnt in array with give element
// we can give a starting point and end point also
const dummyArr = [2, 4, 5, 6];
// console.log(dummyArr);
dummyArr.fill(0, 2, 3);
// console.log(dummyArr);

// findIndex
const index = nums.findIndex((item) => item === 2);
// console.log(index);

// Flat
const flatEx = [1, [2, 3], [[4, 5], 6]];
const flatenedArray = flatEx.flat(2);
// console.log(flatenedArray);

// reverse
// console.log(nums);
nums.reverse();
// console.log(nums);

// sort
const unsorted = [2, 5, 1, 8, 6, 9, 3];
console.log(unsorted.sort((a, b) => b - a));
