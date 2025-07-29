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

// 7. ✅ The sort() array method
// Sort method converts the elements to strings and then sorts them. The default sort order is ascending.
const name = ['tom', 'alex', 'bob', 'jane'];
console.log('After default sorting: ', names.sort()); // ['alex', 'bob', 'jane', 'tom']
console.log(names); // mutate the original array

// Sort in descending order ( We need a custom comparator function ), if two elements are equal then return 0 else if a is greater than b return -1 else return 1
name.sort(function (a, b) {
  return a === b ? 0 : a > b ? -1 : 1;
});
console.log('After custom sorting: ', name); // ['tom', 'jane', 'bob', 'alex']

let ages = [1, 10, 21, 2];
ages.sort();
console.log(ages); // [1, 10, 2, 21] -> Wrong sorting because it converts the elements to strings and then sorts them.
// To fix this we need to provide a comparator function
ages.sort(function (a, b) {
  return a === b ? 0 : a > b ? 1 : -1; // change -1 to 1 and 1 to -1 for descending order
});
console.log(ages); // [1, 2, 10, 21] -> Correct sorting

// 8. ✅ The splice() array method
// splice method can be used to remove elements from an array, add elements to an array, or modify elements in an array
// splice(start,deleteCount,item1,item2,..) -> (start: index to start from), (deleteCount: number of elements to delete), (item1,item2,..: elements to add)
// splice method always return the deleted elements as an array if nothing deleted then it will return an empty array
const months = ['Jan', 'April', 'June', 'July'];
const sliced = months.splice(0, 1, 'Feb', 'March');
console.log(sliced); // ['Jan']
console.log(months); // ['Feb', 'March', 'April', 'June', 'July'] -> mutate the original array
const sliced2 = months.splice(3, 2);
console.log(sliced2); // ['June', 'July']
console.log(months); // ['Feb', 'March','April']

// 9. ✅ The at() array method
// at method takes an index and returns the element at that index. It also supports negative indexing.
const junkFood = ['🍿', '🍔', '🍕'];
console.log(junkFood.at(0)); // 🍿
console.log(junkFood.at(-2)); // 🍔
console.log(junkFood.at(-9)); // undefined

// 10. ✅ The copyWithin() array method
// copyWithin method copies a sequence of array elements within the array.
// copyWithin(target, start, end) -> (target: index to copy elements to), (start: index to start copying from), (end: index to stop copying from)
const copyArr = ['a', 'b', 'c', 'd', 'e'];
copyArr.copyWithin(0, 3, 5); // copy elements from index 3 to 5 (5 not included) to index 0
console.log(copyArr); // ['d', 'e', 'c', 'd', 'e']

// 11. ✅ The flat() array method
// flat method is used to flatten an array. It takes a depth parameter which specifies how deep the array should be flattened.
const flatArr = [1, 2, [3, 4, [5, [6]]]];
console.log(flatArr.flat(1)); // [ 1, 2, 3, 4, [ 5, [ 6 ] ] ]
console.log(flatArr.flat(2)); // [ 1, 2, 3, 4, 5, [ 6 ] ]
console.log(flatArr.flat(Infinity)); // [ 1, 2, 3, 4, 5, 6 ] -> infinite depth

//* ✅ IMMUTABLE ARRAY METHODS

// 1. ✅ The toReversed() array method
// toReversed method returns a new array with the elements in reverse order. It does not mutate the original array.
const reversed = name.toReversed();
console.log(reversed); // ['tom', 'jane', 'bob', 'alex']
console.log(name); // ['tom', 'jane', 'bob', 'alex'] -> Not Mutated

// 2. ✅ The toSorted() array method
// toSorted method returns a new array with the elements sorted in ascending order. It does not mutate the original array.
const sorted = name.toSorted();
console.log(sorted); // ['alex', 'bob', 'jane', 'tom']
console.log(name); // ['tom', 'jane', 'bob', 'alex'] -> Not Mutated

// 3. ✅ The toSpliced() array method
// toSpliced method returns a new array with the elements spliced. It does not mutate the original array.
const spliced = name.toSpliced(1, 2, 'Rahul', 'Raj'); // (start, deleteCount, item1, item2, ..)
console.log(spliced); // ['tom', 'Rahul', 'Raj', 'alex']
console.log(name); // ['tom', 'jane', 'bob', 'alex'] -> Not Mutated

// 4. ✅ The with() array method (New in ES2023)
const num = [1, 2, 3, 4, 5];
const newNum = num.with(2, 10); // (index, value)
const anotherNum = num.with(-2, 10); // also supports negative indexing
console.log(newNum); // [1, 2, 10, 4, 5]
console.log(anotherNum); // [1, 2, 3, 10, 5]
console.log(num); // [1, 2, 3, 4, 5] -> Not Mutated

//* ✅ Grouping elements in Array
// Grouping elements in Array using Object.groupBy() method is a new feature in ES2023 (ES12) that allows you to group elements in an array based on a certain property or condition.
const employees = [
  { name: 'Rahul', dept: 'Engineering', salary: 10000 },
  { name: 'Raj', dept: 'HR', salary: 5000 },
  { name: 'Ravi', dept: 'Sales', salary: 6000 },
  { name: 'Ritu', dept: 'HR', salary: 6500 },
  { name: 'Riya', dept: 'Sales', salary: 5500 },
  { name: 'Rina', dept: 'Engineering', salary: 7000 },
];

const groupedByDet = Object.groupBy(employees, ({ dept }) => dept);
console.log(groupedByDet);

const groupedBySalary = Object.groupBy(employees, ({ salary }) => {
  return salary >= 6000 ? 'high' : 'low';
});
console.log(groupedBySalary);

//* ✅ The Array-Like
// Aray-Like objects are objects that have a length property and can be accessed using index. But they are not arrays. They are objects.
const arr_like = { 0: 'I', 1: 'am', 2: 'array like', length: 3 };
console.log(arr_like.length); // 3
console.log(arr_like[0]); // 'I'
console.log(arr_like[2]); // 'array like'
console.log(Array.isArray(arr_like)); // false
console.log(arr_like instanceof Object); // true

function temp() {
  console.log('Array-Like Object: ', Array.from(arguments)); // arguments is an array-like object, not an array, so if we want to apply any array method on it, it will throw an error
  // For this we need to convert it into an array
  const args = Array.from(arguments);
  // We can also do [...arguments] to convert it into an array
  console.log('Converted to Array: ', args);
}
temp(1, 2, 3, 4, 5);

//* ✅ The Array.fromAsync() array method
// Array.fromAsync() method is used to convert an async iterable into an array.
const ret = Array.fromAsync({
  0: Promise.resolve('Soumadip'),
  1: Promise.resolve('Majila'),
  length: 2,
}).then(res => console.log(res));

//* ✅ The Array.of() array method
// Array.of() method is used to create an array from a variable number of arguments.
const arr = Array.of(1, 'name', { name: 'Soumadip' }, [4, 5]);
console.log(arr);

//* ✅ Array Iterator Methods in JavaScript

let customers = [
  {
    id: 1,
    f_name: 'Soumadip',
    l_name: 'Majila',
    gender: 'Male',
    married: false,
    age: 21,
    expence: 5000,
    purchased: ['book', 'pen', 'pencil'],
  },
  {
    id: 2,
    f_name: 'Sourav',
    l_name: 'Mondal',
    gender: 'Male',
    married: true,
    age: 65,
    expence: 10000,
    purchased: ['shirt', 'book', 'shoes'],
  },
  {
    id: 3,
    f_name: 'Sohini',
    l_name: 'Mukherjee',
    gender: 'Female',
    married: true,
    age: 64,
    expence: 7000,
    purchased: ['earring', 'chain', 'ring'],
  },
];

//  ✅ The filter() array method
// filter method creates a new array with all elements that pass the test implemented by the provided function.

/*const newArray = arr.filter((element, index, array) => {
  // Do something here
})*/
// - Get 'senior Citizens' by Filtering out other customers
const seniorCitizens = customers.filter(customer => customer.age >= 60);
console.log(seniorCitizens);

// ✅ The map() array method
// The map() method creates a new array with the results of applying a function to each element in the original array.

const newArray = customers.map(customer => {
  if (customer.gender === 'Male') {
    customer.title = 'Mr.';
  } else if (customer.gender === 'Female' && customer.married === false) {
    customer.title = 'Ms.';
  } else {
    customer.title = 'Mrs.';
  }
  customer.full_name = `${customer.title} ${customer.f_name} ${customer.l_name}`;
  return customer;
});
console.log(newArray);

// ✅ The reduce() array method
// The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

// Example - 1
const nums = [1, 2, 3, 4, 5];
const sumOutput = nums.reduce((acc, curr) => {
  acc = acc + curr;
  return acc;
}, 0);
console.log(sumOutput);

// Example - 2 - average age of customer who have purchased the book
let count = 0;
const totalAge = customers.reduce((avg, customer) => {
  if (customer.purchased?.includes('book')) {
    avg = avg + customer.age;
    count++;
  }
  return avg;
}, 0);
console.log(totalAge / count);

// ✅ The some() array method
// Checks whether at least one element in the array passes the test implemented by the provided function.

const result = customers.some(customer => customer.age >= 60);
console.log(result); // true

// ✅ The every() array method
// Checks whether all elements in the array pass the test implemented by the provided function.

const result2 = customers.every(customer => customer.age >= 60);
console.log(result2); // false

// ✅ The find() array method
// Returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.

const result3 = customers.find(customer => customer.age == 60);
console.log(result3); // if not found then it will return undefined

// ✅ The findIndex() array method
// Returns the index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.

const result4 = customers.findIndex(customer => customer.age == 60);
console.log(result4); // if not found then it will return -1

// ✅ The findLastIndex() array method
// Returns the index of the last element in the array that satisfies the provided testing function. Otherwise -1 is returned.

const result5 = customers.findLastIndex(customer => customer.age >= 60);
console.log(result5); // if not found then it will return -1

//* ✅ Array method Chaining
// Array method chaining is a technique in JavaScript that allows you to chain multiple array methods together to perform complex operations on an array in a single statement.

// Example - Get total amount spent by married customers

// Total amount -> reduce()
// Get their expense -> map() -> Optional
// Married Customer -> filter()

const totalExpenseOfMarriedCustomers = customers
  .filter(customer => customer.married)
  .map(customer => customer.expence)
  .reduce((acc, curr) => acc + curr, 0);

console.log(totalExpenseOfMarriedCustomers);

//* ✅ The forEach() array method
// forEach() method executes a provided function once for each array element.
const elem = [1, 2, 3, 4, 5];
elem.forEach(element => {
  console.log(element);
});
// Note-> forEach() method does not return anything (it returns undefined) it just executes a provided function once for each array element and does not return anything, that is the only difference between forEach() and map() methods.
