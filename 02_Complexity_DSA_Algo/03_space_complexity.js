// Space Complexity

// O(1)
const funnyNumber = (arr) => {
    const sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
};

let score = [420, 96, 12, 69, 77];

// console.log(funnyNumber(score));

// O(n) Space Complexity
const funnyNumberArray = (n) => {
    const array = [];

    for (let i = 0; i < n; i++) {
        array.push(i * 69);
    }
    return array;
};

console.log(funnyNumberArray(5));


// primitive Types ->
// Boolean, num, undefined, null; => Constant
//  String, Array, Objects => Dynamic

// O(n^2)
const createMatrix = (n) => {
    let matrix = []
    for (let i = 0; i < n; i++) {
        matrix[i] = [];
        for (let j = 0; j < n; j++) {
            matrix[i][j] = i + j;     
        }
    }
    return matrix;
}

// example usage
const matrix = createMatrix(5);
console.log(matrix);
  