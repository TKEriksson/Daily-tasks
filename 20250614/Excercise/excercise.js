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

// WHAT IS THIS!? Need to watch some youtube. . .

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







