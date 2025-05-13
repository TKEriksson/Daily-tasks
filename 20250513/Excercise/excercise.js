const prompt = require("prompt-sync")();

// https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
// 147. Sum of Digits in String

// Write a JavaScript program to compute the sum of all the digits that occur in a given string.  

console.log("\nExcercise 1");

{
  let str = prompt("Enter a string with containing digits:");
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (parseInt(str[i]) > 0) sum += parseInt(str[i]);
  }
  console.log("Sum of digits in: " + str + " is", sum)
}





// https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
// 99. Check if String Can Rearrange to Match Another

// Write a JavaScript program to check whether it is possible to rearrange the characters of a given string. This is in such a way that it will become equal to another given string. 
// Click me to see the solution
console.log("\nExcercise 2");

{
  // So like check if its the same letters by sorting it? Should do the trick. No CaSE sensitivity.
  let str1 = "Tobias Eriksson är bäst"
  let str2 = "Saibot sonskire rä stäb"
  let str3 = "TK är bäst";

  function compare(s1, s2) {
    return s1.toUpperCase().split("").sort().join("") == s2.toUpperCase().split("").sort().join("");
  }

  console.log(str1 + " (sort) == " + str2 + " (sort) = " + compare(str1, str2));
  console.log(str1 + " (sort) == " + str3 + " (sort) = " + compare(str1, str3));
  
}



// https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
// 3. Throw Error for Division by Zero

// Write a JavaScript function that accepts two numbers as parameters and throws a custom 'Error' if the second number is zero.
console.log("\nExcercise 3");

{
  function twoNums(n1, n2) {

    if (n2 == 0) {
      throw new Error("n2 is 0");
      //  return false; the return happens at throw error..
    }

    return true;
  }

  try {
    console.log(twoNums(1, 1));
    console.log(twoNums(1, 0));
  } catch(e) {
    console.log(e.message);
  }

}



// https://www.w3resource.com/javascript-exercises/javascript-object-exercises.php
// 5. Cylinder Volume

// Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes.
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.

console.log("\nExcercise 4");

{
  class Cylinder {
    constructor(h, r) {
      this.height = h;
      this.radius = r;
      this.volume = this.#getVolume(); // i know i could have just calculated it here in line, but i wanted to practice class methods.
    }

    #getVolume() {
      return (Math.PI * (this.radius ** 2) * this.height).toFixed(4);
    }

  }

  const cyl1 = new Cylinder(11, 6);
  const cyl2 = new Cylinder(cyl1.height * (1/3), cyl1.radius * (1/3));
  // cyl1.getVolume // Nope, its indeed private.

  console.log(cyl1);
  console.log(cyl2);
  
}









// https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php
// 17. Shuffle Array

// Write a JavaScript program to shuffle an array.
console.log("\nExcercise 5");
{
  
  
  /* 
  let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n"];
  
  function shuffle(arr) {
    
    // Go from the end of the array, and swap between [i] and [randomIndex].
    for (let i = arr.length-1; i >= 0; i--) {
      let rndIndex = Math.floor(Math.random() * i) + 1; // Gets a value from 1 to i.
      arr[i] = arr[rndIndex];
    }

    return arr;
  }

  console.log(shuffle(arr));
  */

  // Nope, this way not every element in the array will get copied...

  // This is how i solved it before (works):

// let test = ["hej", "ok", "aajo", "okej", "abc", "testar", "abcde"];
// let test2 = shuffleArr(test);

// let test3 = [];
// console.log(shuffleArr(test3));

// function shuffleArr(arr) {
//   let arr2 = [];
//   let used = [];
//   let rndI;
//   for (let i = 0; i < arr.length; i++) {
//     while(true) {      
//       rndI = Math.floor(Math.random() * arr.length);
//       let found = false;
//       for (let j = 0; j < used.length; j++) {
//         if (rndI == used[j]) {
//           found = true;
//         }
//       }
//       if (!found) {
//         break;
//       }
//     }
//     arr2[i] = arr[rndI];
//     used[i] = rndI;
//   }
//   return arr2;
// }

// console.log(test);
// console.log("Shuffled:");
// console.log(test2);

// When i asked chat gpt it recommended Fisher-Yates shuffle algoritm. So i learn that instead.

// function shuffleArr(arr) {
//   // Create a copy of the array to avoid modifying the original array
//   let arr2 = [...arr];
  
//   // Fisher-Yates shuffle
//   for (let i = arr2.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [arr2[i], arr2[j]] = [arr2[j], arr2[i]]; // Swap elements
//   }


//   return arr2;
// }

//   // Okey, but why does my attempt lose elements and this does not?
  // Its because i overwrite instead of swap (ofc)!
  // So back to my attemp, but i swap instead. And also fix out of boundries 

let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n"];
  
  function shuffle(arr) {
    
    // Go from the end of the array, and swap between [i] and [randomIndex].
    for (let i = arr.length-1; i >= 0; i--) {
      let rndIndex = Math.floor(Math.random() * (i + 1)); // Gets a value from 0 to i.
      let temp = arr[i]; // So i could have used a "swap operation using array destructuring". But its not intuitive for me, yet. So i go with this for now.
      arr[i] = arr[rndIndex];
      arr[rndIndex] = temp;
    }

    return arr;
  }

  console.log(shuffle(arr));

}





// https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php
// 40. Generate Integer Range Array

// Write a JavaScript function to generate an array of integer numbers, increasing one from the starting position, of a specified length.

// Test Data :
// console.log(array_range(1, 4));
// [1, 2, 3, 4]
// console.log(array_range(-6, 4));
// [-6, -5, -4, -3]
console.log("\nExcercise 6");
{
  function array_range(from, to) {
    let arr = [];

    for (let i = from; i <= to; i++) {
      arr.push(i);
    }

    return arr;
  }

  console.log(array_range(5, 15));

}





// https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
// 20. Generate Random String ID

// Write a JavaScript function that generates a string ID (specified length) of random characters.
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
// Click me to see the solution.
console.log("\nExcercise 7");

{
  

  function genId(length) {
  
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let str = "";
    for (let i = 0; i < length; i++) {
      str += chars[Math.floor(Math.random() * (chars.length))];
    }

    return str;

  }

  console.log(genId(100));

}



// https://www.w3resource.com/javascript-exercises/fundamental/index1.php#google_vignette
// 159. Read File Lines into Array

// Write a JavaScript program to get an array of lines from the specified file.
console.log("\nExcercise ");

{
  const fs = require("fs"); // nåt sånt?? Måste googla... jo stämmer
  data = fs.readFileSync("linesoftext.txt", "utf8").split("\r\n"); 
  console.log(data);

  // The solution gpt suggested was using map and trim or something. I just split like this because i know its that format... "By using .split("\r\n") you're directly targeting Windows-style line endings, which is totally valid if you're sure the file was saved with those (\r\n) — like most .txt files created on Windows."
}








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

