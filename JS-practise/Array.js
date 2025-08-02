// JS ARRAY

//* ✅ How to Create an Array in JavaScript?
// 1. Array Literal
const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
// 2. Array constructor
const fruits = new Array('🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🥭');
console.log(salad, fruits);

// NOTE: If we provide a single number argument to the Array constructor, it creates an array with that length.
const numArr = new Array(3); // [empty × 3]

//* ✅ How to Get Elements from an Array in JS?
console.log(salad[0], fruits[2]);
for (let i = 0; i <= salad.length - 1; i++) {
  console.log(salad[i]);
}

//* ✅ How to Add Elements to an Array in JS?

// 1. push() - adds elements to the end of an array and returns the new length of the array
const puRet = salad.push('🥜');
console.log(puRet); // 8
console.log(salad); // array after adding element at the end

// 2. unshift() - adds elements to the beginning of an array and returns the new length of the array
const unRet = salad.unshift('🍒');
console.log(unRet); // 9
console.log(salad); // array after adding element at the beginning

// - push() and unshift() both methods mutate the original array.

//* ✅ How to Remove Elements from an Array in JS?

// 1. pop() - removes the last element from an array and returns the removed element
const poRet = salad.pop();
console.log(poRet); // 🥜
console.log(salad); // array after removing element from the end

// 2. shift() - removes the first element from an array and returns the removed element
const shRet = salad.shift();
console.log(shRet); // 🍒
console.log(salad); // array after removing element from the beginning

// - pop() and shift() both methods mutate the original array.

//* ✅ How to Copy and Clone an Array in JS?

// slice() - returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
const slRet = salad.slice(0, 3);
const saladCopy = salad.slice();
console.log(slRet); // ['🍅', '🍄', '🥦']
console.log(salad);
console.log(saladCopy === salad); // false (shallow copy - different reference)

//* ✅ How to Determine if a Value is an Array in JS?
Array.isArray([1, 2, 3]); // true
Array.isArray('array'); // false
Array.isArray({ name: 'array' }); // false
Array.isArray([]); // true

//* ✅ Array Destructuring in JavaScript(1.Basic)
const [tomato, mashroom] = salad;
console.log('Tomato: ', tomato, 'Mashroom: ', mashroom); // 🍅 🍄

// - ✅ How to Assign a Default Value to a Variable?
const [mango, orange = '🍊'] = ['🥭'];
console.log(mango, orange); // If orange is not provided, it will be assigned the default value of '🍊'

// - ✅ How to Skip a Value in an Array?
const [banana, , cherry] = ['🍌', '🍍', '🍒'];
console.log(banana, cherry);

// - ✅ Nested Array Destructuring in JS
const [one, [four, [six, seven]]] = [1, [4, [6, 7]]];
console.log(`one: ${one}, four: ${four}, six: ${six} , seven: ${seven}`);

//* ✅ How to Use the Rest Parameter in JS?
// It allows you to represent an indefinite number of arguments as an array.
const [a, b, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(a, b, rest);

//* ✅ How to Use the Spread Operator in JS?
// It allows you to expand an iterable (like an array) into its individual elements.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

//* ✅ Destructuring Use Cases in JavaScript
// - ✅ How to Swap Values with Destructuring?
let num1 = 2;
let num2 = 1;
[num1, num2] = [num2, num1];
console.log(num1, num2); // 1 2

//* ✅ The length property
const array1 = [1, 2, 3];
console.log(array1.length); // 3

// Note: Maximum array length is 2^32-1 elements
// const array2 = new Array(4294967296); // -> Invalid array length

// We can also change the length of the array
array1.length = 2;
console.log(array1); // Removes the last element from the array -> [1, 2]

array1.length = 5;
console.log(array1); // [1, 2, <3 empty slots>]

// We cannot assign a negative value to the length property
// array1.length = -1; // ->Invalid array length

//* ✅ JavaScript Array Methods

// 1. ✅ The concat() array method
// Merge two or more arrays and return a new array.
const first = [1, 2, 3];
const second = [4, 5, 6];
const merged = first.concat(second); // [1, 2, 3, 4, 5, 6]
console.log(merged);
console.log(first, second); // no change in original arrays

// 2. ✅ The join() array method
// Return a string of all the array elements joined together by a separator.
const joined = merged.join(', ');
console.log(joined); // 1, 2, 3, 4, 5, 6

// 3. ✅ The fill() array method
// Fill all the array elements with a static value.
const colors = ['red', 'green', 'blue'];
colors.fill('yellow'); // ['red', 'yellow', 'blue']
console.log(colors); // mutate the original array
colors.fill('pink', 1, 2); // ['',startIndex, endIndex]
console.log(colors); // ['red', 'pink', 'blue']

// 4. ✅ The includes() array method
// Determine whether an array includes a certain element, returning true or false as appropriate.
const names = ['Ram', 'Sam', 'Jodu', 'modu', 'Ram'];
console.log(names.includes('Ram')); // True
console.log(names.includes('ram')); // False -> case sensitive
console.log(names.includes('Ramu')); // False

// 5. ✅ The indexOf() array method
// Return the first index at which a given element can be found in the array, or -1 if it is not present.
console.log(names.indexOf('Ram')); // 0
console.log(names.indexOf('ram')); // -1 -> case sensitive
console.log(names.indexOf('Ramu')); // -1

// - lastIndexOf() array method
// Return the last index at which a given element can be found in the array, or -1 if it is not present.
console.log(names.lastIndexOf('Ram')); // 4

// 6. ✅ The reverse() array method
// Reverse the order of the elements in an array.
const reverse = names.reverse();
console.log(reverse); // ['Ramu', 'modu', 'Jodu', 'Sam', 'Ram']
console.log(names); // mutate the original array
