// So i look into objects today, LindhCoding have good videos in swedish.
//https://www.youtube.com/watch?v=Vcrwb9C2w3Y&list=PLaknUI4-UhkJDdcXIWZn0tvxTDjmUW096&index=6


const person1 = {
  fName: "Tobias",
  lName: "Eriksson",
  phone: {
    home: "0701234567",
    work: "0850839400"
  },
  sayHi: () => {console.log("Hi! My name is " + person1.fName + " " + person1.lName +".");},
  age: 35
}

const {age, phone: {home}} = person1;

person1.sayHi();
console.log(home, age);



// Repeated all the basics with Videos, and also praticed by working on new versions on the VS Code extension. 






// https://www.w3resource.com/javascript-exercises/asynchronous/index.php#google_vignette
// 5. Sequential Async Operations

// Write a JavaScript program that implements a function that performs a series of asynchronous operations in sequence using Promises and 'async/await'.
console.log("\nExcercise ");
{

}









// https://www.w3resource.com/javascript-exercises/asynchronous/index.php#google_vignette
// 7. API Fetch with Retry Mechanism

// Write a JavaScript function that fetches data from an API and retries the request a specified number of times if it fails.
console.log("\nExcercise ");

{
  
}







// Excercise 4 and 5 need html, so i put them in another folder.

// https://www.w3resource.com/javascript-exercises/event/index.php
// 9. Enter Key Detection in Input

// Write a JavaScript program that adds a keydown event listener to a text input to detect when the "Enter key" is pressed.
console.log("\nExcercise ");


{
  
}





// https://www.w3resource.com/javascript-exercises/event/index.php
// 5. Image Slideshow Navigation

// Write a JavaScript program to create a slideshow that changes the displayed image when a next or previous button is clicked.
console.log("\nExcercise ");


{
  
}





// https://www.w3resource.com/javascript-exercises/oop/index.php
// 1. Person Class with Details

// Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.
console.log("\nExcercise ");

{
  
}







// https://www.w3resource.com/javascript-exercises/oop/index.php
// 3. Vehicle and Car Classes with Inheritance

// Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.
console.log("\nExcercise ");

{
  
}




// https://www.w3resource.com/javascript-exercises/oop/index.php
// 4. BankAccount Class with Deposit and Withdrawal

// Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.
console.log("\nExcercise ");

{
  
}





// https://www.w3resource.com/javascript-exercises/oop/index.php
// 8. Animal and Dog Classes with Sound

// Write a JavaScript program that creates a class called 'Animal' with properties for species and sound. Include a method to make the animal's sound. Create a subclass called 'Dog' that inherits from the 'Animal' class and adds an additional property for color. Override the make sound method to include the dog's color. Create an instance of the 'Dog' class and make it make its sound.

// const wavPlayer = require("node-wav-player");
console.log("\nExcercise ");

{
  
}






// https://www.w3resource.com/javascript-exercises/oop/index.php
// 12. University Class with Department Management

// Write a JavaScript program that creates a class called University with properties for university name and departments. Include methods to add a department, remove a department, and display all departments. Create an instance of the University class and add and remove departments.

// Want to try import / export.
console.log("\nExcercise ");

{
  
}








// https://www.w3resource.com/javascript-exercises/oop/index.php
// 11. BankAccount Class with Transfers Between Accounts

// Write a JavaScript program that creates a class called BankAccount with properties for account number, account holder name, and balance. Include methods to deposit, withdraw, and transfer money between accounts. Create multiple instances of the BankAccount class and perform operations such as depositing, withdrawing, and transferring money.
console.log("\nExcercise ");

{
  
}






// https://www.w3resource.com/javascript-exercises/javascript-object-exercises.php
// 2. Delete Property

// Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
console.log("\nExcercise ");

{
  
}






// https://www.w3resource.com/javascript-exercises/javascript-object-exercises.php
// 6. Bubble Sort

// Write a bubble sort algorithm in JavaScript.
// Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
// Sample Data: [6,4,0, 3,-2,1]
// Expected Output : [-2, 0, 1, 3, 4, 6]
console.log("\nExcercise ");

{
  
}






// https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php
// 14. Remove Duplicates

// Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
// Click me to see the solution
console.log("\nExcercise ");

{
  
}






// https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php
// 21. Flatten Nested Array

// Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened to a single level.
console.log("\nExcercise ");

{
  
}




// https://www.w3resource.com/javascript-exercises/javascript-recursion-functions-exercises.php
// // 6. Fibonacci Sequence

// Write a JavaScript program to get the first n Fibonacci numbers.  
// Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two.







// https://www.w3resource.com/javascript-exercises/javascript-recursion-functions-exercises.php
// 12. Recursive Binary Search in Array

// Write a JavaScript program to search for a given integer in an array of sorted integers using the Binary Search Algorithm and recursion.  
// Test Data:
// ([1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23], 6) -> 4
// ([1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23], 16) -> -1

/*



*/
{



  function binSearch(arr, key) {

    // Divide the search space into two halves by finding the middle index “mid”. 
    // Compare the middle element of the search space with the key. 
    // If the key is found at middle element, the process is terminated.
    // If the key is not found at middle element, choose which half will be used as the next search space.
    // If the key is smaller than the middle element, then the left side is used for next search.  
    // If the key is larger than the middle element, then the right side is used for next search.
    // This process is continued until the key is found or the total search space is exhausted.

    let low = 0;
    let high = arr.length-1;
    let mid;

    while (high >= low) {
      mid = Math.floor((high - low) / 2) + low;

      // Check if we find the key in the mid ( = found!)
      if (key == arr[mid]) {
        // found, return mid!
        return mid;

      } else if (key > arr[mid]) {
        // the result is in the upper half.
        low = mid + 1;


      } else if (key < arr[mid]) {
        // the result is in the lower half.
        high = mid - 1;

      }

    }

    return -1; // if the key == arr[mid] never returns, it means no result, so return -1.

  }

  let arr = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
  let searchKey = 7;

  let findPos = binSearch(arr, searchKey, 0, arr.length-1);

  if (findPos >= 0) {
     console.log(`${searchKey} found in:\n${arr}\n at pos: ${findPos}`);
  } else {
    console.log("Not found");
  }

}





// https://www.w3resource.com/javascript-exercises/linkedlist/index.php
// 4. Insert a node at any position in a SLL
// Write a JavaScript program to insert a node at any position in a Singly Linked List.
// https://www.youtube.com/watch?v=cob_kM0PJMo








// 11. Generate Random Hexadecimal Color Code
// Write a JavaScript program to generate a random hexadecimal color code.







// 3. CSV String to 2D Array
// Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array.








//https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php
// 10. Print Nested Array Elements
// Write a JavaScript program that prints the elements of the following array.
// Note : Use nested for loops.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Sample Output :
// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"
// ------
// ------




//https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
// 9. Days Left Before Christmas
// Write a JavaScript program to calculate the days left before Christmas.  







//https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php
// 5. Join Array Elements

// Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"





// 13. Repeat String

// Write a JavaScript function to concatenate a given string n times (default is 1).
// Test Data :
// console.log(repeat('Ha!'));
// console.log(repeat('Ha!',2));
// console.log(repeat('Ha!',3));
// "Ha!"
// "Ha!Ha!"
// "Ha!Ha!Ha!"







// 152. Round Number to Digits
// Write a JavaScript program to round a number to a specified amount of digits.





// 183. Check Valid JSON
// Write a JavaScript program to check if the provided argument is valid JSON.







// 224. Remove HTML/XML Tags
// Write a JavaScript program to remove HTML/XML tags from strings.





// 243. Distance Between Points
// Write a JavaScript program to get the distance between two given points.







// 251. Write JSON to File
// Write a JavaScript program to write a JSON object to a file.







