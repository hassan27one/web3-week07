// Assignment for the week-07 is:

// Q-1  Write a program that uses filter to remove all negative numbers from an array of numbers

// Q-2  Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.

// Q-3  Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.

// Q-4  Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.


// Q-5  Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.


// Q-6  Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.


// Q-7  Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".



// Q-1  Write a program that uses filter to remove all negative numbers from an array of numbers

let Array1 = [0, 1, -2, 3, 4, 5, -6, 7 ];
 
for(var i:number=0; i<Array1.length;i++)
    {
    if(Array1[i] <= 0)
    {
        Array1.splice(i,1);
        i--;     
    }
    }
console.log(Array1);
         
// Output -------------------------------------
//  [ 1, 3, 4, 5, 7 ]
 