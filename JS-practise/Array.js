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
