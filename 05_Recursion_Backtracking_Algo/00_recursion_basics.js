// Recursion -> The function that calls itself

function Piyush () {
    return Rehana();
}

function Rehana(){
    return Vadant();
}

function Vadant(){
    return Chirag();
}

function Chirag(){
    return Ajay();
}

// This will resolve recursion
function Ajay(){        // Base CAse
    return true;
}

// console.log(Piyush());


function recursiveFunc(person){
    
    if(person === 5) return true;
    console.log(person);
    return recursiveFunc(person + 1);
    
}

// console.log(recursiveFunc(1));


// Loops VS Recursion

// function multiply(arr) {
//     let product = 1;
//     for (let i = 0; i < arr.length; i++) {
//         product *= arr[i];
        
//     }
//     return product;
// }

function multiply(arr) {
    console.log(arr);
    
    if(arr.length <= 0){
        return 1;
    }else return arr[arr.length -1] * multiply(arr.slice(0, arr.length -1));
}

console.log(multiply([1, 2, 3, 4]));
