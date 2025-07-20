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
