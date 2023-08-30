"use strict";
// Assignment for the week-07 is:
// Q-1  Write a program that uses filter to remove all negative numbers from an array of numbers
// Q-2  Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.
// Q-3  Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.
// Q-4  Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.
// Q-5  Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
// Q-6  Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.
// Q-7  Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".
// Q-1  Write a program that uses filter to remove all negative numbers from an array of numbers
let Array1 = [0, 1, -2, 3, 4, 5, -6, 7];
console.log("Array01 is = = ", Array1);
for (var i = 0; i < Array1.length; i++) {
    if (Array1[i] <= 0) {
        Array1.splice(i, 1);
        i--;
    }
}
console.log("Array01 after Remove all -ve Numers is = ", Array1);
// Output -------------------------------------
//  Array01 after Remove all -ve Numers is = [ 1, 3, 4, 5, 7 ]
// =================================================================================
// Q-2  Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.
let Array2 = [1, 2, 3, 4, 5];
console.log("Array2 is = ", Array2);
let NewArray2 = Array2.map(function MultipliedBy2(num) {
    return num * 2;
});
console.log("New Array02 after Multiplied by 2 is = ", NewArray2);
// Output -------------------------------------
// New Array02 after Multiplied by 2 is =  [ 2, 4, 6, 8, 10 ]
// =================================================================================
// Q-3  Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.
let Array03 = ["apple", "banana", "cherry", "date", "grape"];
console.log("Ayyay03 of Fruits = ", Array03);
let NewArray03 = Array03.filter(Array03 => Array03.length == 5);
console.log("NewArray03 of Fruits containing only 5 Characters = ", NewArray03);
// Output -------------------------------------
// Ayyay03 of Fruits =  [ 'apple', 'banana', 'cherry', 'date', 'grape' ]
// NewArray03 of Fruits containing only 5 Characters =  [ 'apple', 'grape' ]
// =================================================================================
// Q-4  Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to 
//create a new array containing the squares of even numbers.
let Array04 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Original Ayyay04 is = ", Array04);
let SquareNumArray04 = Array04.filter((Array04) => Array04 % 2 === 0)
    .map((EvenArray04) => EvenArray04 * EvenArray04);
console.log("new array containing the squares of even numbers is = ", SquareNumArray04);
// =================================================================================
