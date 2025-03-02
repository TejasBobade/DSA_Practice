// String in JS

// Creating Strings
const string = new String("This is string object.");
const string1 = "This is string in dubble commas";
const string2 = 'This is string in single commas';
const string3 = `This is string inside back sticks also know as template literal ${string2}`;

// console.log(string3);
// console.log`Hello ${string}.`; // [ 'Hello ', '.' ] [String: 'This is string object.']



function test(string, youtubeChannel, person){
    console.log(string, youtubeChannel, person);
    return;
};

const channel = "ChipherVoid";
const name = "Tejas";

// test`Subscribe to ${channel} run by ${name}`;


// Strings length
const str = "The length will give a size of string";
// console.log(str.length);


// Accessing Characters
// console.log(str[4]);
// console.log(str.charAt(4));


// Looping
for(let i = 0; i < str.length; i ++){
    // console.log(str[i]); 
}


// Modifying Strings (Strings are inmutable)
str[4] = "b"; // Can't do this
// console.log(str.replace("l","b"));      // replace first instance of that character or word
// console.log(str.replaceAll("e","w"));   // replaces all instance of that character or word

const newStr = str.concat(" This will join the string.");
// console.log(newStr);


const str1 = "      Hello world      ";
// console.log(str1.trim());


//  Searching 
// console.log(str.indexOf("length"));
// console.log(str.lastIndexOf("e"));
// console.log(str.startsWith("T"));
// console.log(str.endsWith("g"));



// Extracting Substrings
// console.log(str.substring(13, 25));
// console.log(str.slice(13,25));


// Converting Case
const toBeConverted = 1;
// console.log(typeof(String(toBeConverted)));
const toBe = {name: "Tejas"};
// console.log(String(toBe));

// console.log(str.toLocaleUpperCase());
// console.log(str.toLocaleLowerCase());
// console.log(str.charCodeAt(0));          // Gives ASCII Values
// console.log(String.fromCharCode(65));    // Create astring using ASCII Value


const s1 = "apple";
const s2 = "banana";
// console.log(s1.localeCompare(s2));

// console.log(str.includes("length"));



// Splitting and Joining Strings
console.log(str.split("e"));
const arr = ["apple", "banana"];
console.log(arr.join(" and "));

 