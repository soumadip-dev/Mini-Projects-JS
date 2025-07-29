- ✅ Array method Chaining
- ✅ The forEach() array method
- ✅ The entries() method
- ✅ The values() method
- ✅ The flatMap() array method

## Array Method Mutability and Immutability Table

| Method                       | Mutates Original Array? | Description                                                            |
| ---------------------------- | ----------------------- | ---------------------------------------------------------------------- |
| **Mutating Methods**         |                         |                                                                        |
| `push()`                     | ✅ Yes                  | Adds elements to the end of an array                                   |
| `pop()`                      | ✅ Yes                  | Removes the last element of an array                                   |
| `shift()`                    | ✅ Yes                  | Removes the first element of an array                                  |
| `unshift()`                  | ✅ Yes                  | Adds elements to the beginning of an array                             |
| `splice()`                   | ✅ Yes                  | Adds/removes elements at a specific index                              |
| `sort()`                     | ✅ Yes                  | Sorts elements in place (alters order)                                 |
| `reverse()`                  | ✅ Yes                  | Reverses the order of elements                                         |
| `fill()`                     | ✅ Yes                  | Modifies all or some elements with a static value                      |
| `copyWithin()`               | ✅ Yes                  | Copies part of an array within itself                                  |
| **Non-Mutating Methods**     |                         |                                                                        |
| `map()`                      | ❌ No                   | Creates a new array by applying a function to each element             |
| `filter()`                   | ❌ No                   | Creates a new array with elements that pass a condition                |
| `slice()`                    | ❌ No                   | Returns a new array containing a portion of the original array         |
| `concat()`                   | ❌ No                   | Merges arrays and returns a new array                                  |
| `flat()`                     | ❌ No                   | Flattens nested arrays into a new array                                |
| `flatMap()`                  | ❌ No                   | Maps and flattens the result into a new array                          |
| `reduce()`                   | ❌ No                   | Reduces array elements into a single value                             |
| `reduceRight()`              | ❌ No                   | Like `reduce()`, but iterates from right to left                       |
| `join()`                     | ❌ No                   | Converts elements into a string                                        |
| `toSorted()` _(ES2023)_      | ❌ No                   | Returns a new sorted array (non-mutating alternative to `sort()`)      |
| `toReversed()` _(ES2023)_    | ❌ No                   | Returns a new reversed array (non-mutating alternative to `reverse()`) |
| `toSpliced()` _(ES2023)_     | ❌ No                   | Returns a new array with spliced elements (non-mutating `splice()`)    |
| `find()`                     | ❌ No                   | Returns the first matching element (does not modify array)             |
| `findIndex()`                | ❌ No                   | Returns index of first matching element (does not modify array)        |
| `findLast()` _(ES2023)_      | ❌ No                   | Returns last matching element (does not modify array)                  |
| `findLastIndex()` _(ES2023)_ | ❌ No                   | Returns index of last matching element                                 |
| `every()`                    | ❌ No                   | Checks if all elements meet a condition                                |
| `some()`                     | ❌ No                   | Checks if at least one element meets a condition                       |
| `includes()`                 | ❌ No                   | Checks if an element exists in the array                               |
| `indexOf()`                  | ❌ No                   | Finds the first index of a given element                               |
| `lastIndexOf()`              | ❌ No                   | Finds the last index of a given element                                |
| `at()` _(ES2022)_            | ❌ No                   | Returns the element at a given index (supports negative indexes)       |
| `with()` _(ES2023)_          | ❌ No                   | Returns a new array with an element replaced at a specific index       |

---
