// 4 operation
// const funnyNumber =  (array) => {
//     for (let i = 0; i < array.length; i++) {
//         if (i === 3) return array[i];
//     }
// }

// 1 operation
const funnyNumber =  (array) => {
    return array[3];
}

// const num =[3, 5, 7, 9];

// console.time("funnyNumber");
// console.log(funnyNumber(num));
// console.timeEnd("funnyNumber");


 // 3 Operations => O(1)
function someOperations(n) {
    return (n * (n + 5)) / 2;
};

// console.log(someOperations(1000));


// 2n + 3 Operations => O(n)
function goingUpDown (n) {
    console.log("Going Forward");
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
    console.log("At the End, Going back");
    for (let j = 0; j >= 0; j++) {
        console.log(j);
    }
    console.log("At the start!");
}

// console.log(goingUpDown(5));



// n^2 Operations => O(n^2)
function printBoth(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j);           
        }
    }
}

// console.log(printBoth(5));


