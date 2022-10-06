// Additional assignments for Day 8

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/
const array1 = [1, 2, 3, 4, 5];
const reversed = array1.reverse();
console.log("reversed:", reversed);

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

console.log(Math.max(...array1));

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

console.log(Math.min(...array1));

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/
console.log(" ------- get even numbers -------");

function getEvenNumbers(num) {
  if (num % 2 === 0) {
    console.log(num);
  }
}

var arr = [1, 2, 3, 4, 5, 6];
arr.forEach(getEvenNumbers);

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

console.log("------ remove even numbers -------");

function removeEvens(numbers) {
  return numbers.filter((n) => n % 2 !== 0); // if a number is even, remove it
}

const oddNumbers = removeEvens([1, 2, 3, 4, 5]);
console.log(oddNumbers);

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/
const str = "Hello how are you?";

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/
const myArray = [5, 10, 15, 20];
for (var i = 0; i < myArray.length; i++) {
  myArray[i] += 1;
  console.log(myArray[i]);
}

/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/
