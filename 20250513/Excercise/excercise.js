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
  data = fs.readFileSync("linesoftext.txt", "utf8").split("\r\n"); // suits small scripts, its not async like readFile.
  console.log(data);

  // The solution gpt suggested was using map and trim or something. I just split like this because i know its that format... "By using .split("\r\n") you're directly targeting Windows-style line endings, which is totally valid if you're sure the file was saved with those (\r\n) — like most .txt files created on Windows."


  // Okey i want to try async.

  fs.readFile("linesoftext.txt", "utf8", (e, data) => {
    if (e) {
      console.log("Error - ", e.message);
    } else {
      console.log("This prints in the end because it is a async function in excercise 7.\n");
      console.log(data.split("\r\n"));
    }
  })
}







