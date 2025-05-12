const prompt = require("prompt-sync")();

// From:
// 4. Largest of Five Numbers

// Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results.
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0
// Click me to see the solution

// **************************************************************************

// I picked this one to try to work with an array.
// Instead of alert() i will use console.log to use with node. 
{
    
    console.log("\nExcercise 0");
    let arr = [];
    for (let i = 0; i < 5; i++) {
        arr[i] = Math.floor(Math.random() * 10) + 1;
    }

    let biggest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > biggest) {
            biggest = arr[i];
        }
    }

    console.log("The biggest number is: " + biggest + " from the array: " + arr);

}







// From: https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
// 8. Random Integer Guess Game

// Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".  
// Click me to see the solution

// **************************************************************************
{

    console.log("\nExcercise 1");
    let rndNum = Math.floor(Math.random() * 10) + 1;
    let guessNr =  parseInt(prompt("Guess nr 1 - 10: "));
    if (rndNum == guessNr) {
        console.log("Good work! It was " + rndNum)
    } else {
        console.log("Wrong guess. It was " + rndNum);
    }

}




// From: https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
// 3. Get Current Date in Various Formats

// Write a JavaScript program to get the current date.  
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
// Click me to see the solution
// **************************************************************************
// Never worked with dates in js. So i found some functions to get what i need from a Date() object: https://www.w3schools.com/js/js_date_methods.asp
// 
{

    console.log("\nExcercise 2");

    let date = new Date();
    let yyyy = date.getFullYear();
    // let mm = date.getMonth() + 1 < 10 ? "0" + date.getMonth() + 1 : date.getMonth() + 1; // Dont remember the method to do this automatic, i know it exists. String.something(str, "2")... PADSTART! Okey, i do it again..

    // let dd =  date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    let mm = String(date.getMonth() + 1).padStart(2, "0");
    let dd = String(date.getDate()).padStart(2, "0"); // or .toString().padStart ...
    console.log(mm + "-" + dd + "-" + yyyy);
    console.log(mm + "/" + dd + "/" + yyyy);
    console.log(dd + "-" + mm + "-" + yyyy);
    console.log(dd + "/" + mm + "/" + yyyy);

}



// From: https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
// 54. Count Vowels in String

// Write a JavaScript program to count the number of vowels in a given string.  
// Click me to see the solution
// **************************************************************************

// using swedish vowels.
{

    console.log("\nExcercise 3");
    let vow = "aouåeiyäö";
    let str = prompt("Enter a string: ");
    let cnt = 0;
    for(let i = 0; i < str.length; i++) 
        for (let j = 0; j < vow.length; j++) 
            if (str[i] == vow[j]) cnt++;

    console.log(`${cnt} vowels in ${str}`);

}



// From: https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
// 84. Replace Characters with Next in Alphabet

// Write a JavaScript program to replace each character in a given string with the next in the English alphabet.  
// Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.


console.log("\nExcercise 4");

{
    let str1 = "#abcdefghijklmnopqrstuvwxyz1234@£$";
    str1 += str1.toUpperCase();

    console.log(str1);
    console.log("shifted asci:")

    let str2 = "";
    for (let i = 0; i < str1.length; i++) {
        let code = str1.charCodeAt(i);

        if (code >= 65 && code < 90 || code >= 97 && code < 122) {
            str2 += String.fromCharCode(code+1);
        } else if (code == 90) {
            str2 += "A";
        } else if (code == 122) {
            str2 += "a";
        } else {
            str2 += String.fromCharCode(code); // Dont shift other chars, only alphabet.
        }
    }

    console.log(str2);


}




// https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
// 83. Find Longest String in Array

// Write a JavaScript program to find the longest string from a given array of strings.  


console.log("\nExcercise 5");
{
    function findLongest(arr) {
        let cnt;
        let biggest = 0;
        let biggestIndex = -1;
        arr.forEach((v, i) => {
            cnt = v.length;
            if (cnt > biggest) {
                biggest = cnt;
                biggestIndex = i;
            }
        });

        return arr[biggestIndex];
    }

    let array = ["Hej", "Hur mår du", "Jag mår bra", "Men gud så bra att du mår bra tycker jag!", "ja."];
    console.log (findLongest(array));

}






// https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
// 94. Find Most Frequent Number in Array

// Write a JavaScript program to find the number appearing most frequently in a given array of integers. 
console.log("\nExcercise 6");

{

    // So GPT tells me i can use reduce (also in the prev exc). But i dont understand it so i go with my own, and maybe learn reduce later. I should be able to do it with map?

    let arr = [1, 1, 2, 3, 3, 3, 4, 4, 1, 1, 3, 1, 4, 5, 5, 5, 5, 6, 5, 1, 5, 5];

    let test = new Map(); // So i use this because its not checking multiples.

    /*
    arr.forEach(v => {
        let cnt = 0;
        for (let i = 0; i < arr.length; i++)
            if (arr[i] == v) cnt++;
        test.set(v,cnt);
    })

    let max = [0, 0];
    for (let [key, value] of test) {
        if (value > max[1]) {
            max[0] = key;
            max[1] = value;
        }
    }
        */


    /*

    */
    arr.forEach(v => {
        test.set(v, (test.get(v) || 0) + 1); // if get(v) return NaN (if its not set yet), then the hole expression is 0. 
    });

    let max = [0, 0];
    for (let [k, v] of test) {
        if (v > max[1]) {
            max[0] = k;
            max[1] = v;
        }
    }
    console.log(test);
    console.log("The number " + max[0] + " is most frequent (" + max[1] + " times) in\n" + arr);

}





// https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
// 113. Sum n + n/2 + n/4 + ...

// Write a JavaScript program to calculate the sum of n + n/2 + n/4 + n/8 + .... where n is a positive integer and all divisions are integers. 
console.log("\nExcercise 7");
{

    function divSum(n, steps) {
        let d = 1;
        let sum = 0;

        for (let i = 0; i <= steps; i++) {
            sum += Math.floor(n/d);
            d *= 2;
        }

        return sum;
    }
        console.log("25, 10 steps gives: ", divSum(25, 10));

}// Missed that it should be integer. Adding math.floor.





// https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
// 120. Check if Point is Inside Circle

// Write a JavaScript program to check if a point lies strictly inside the circle. 
// Input:
// Center of the circle (x, y)
// Radius of circle: r
// Point inside a circle (a, b)

// It as 10 years ago i did math like this ^^. i must google / GPT.

console.log("\nExcercise 8");
{
    /* 
    ((x-a)^2 + (y-b)^2) <= r^2
    Where x, y is the point and h, k is the circles point and r = the circles radius.

    Okey, lets go (yes i write it myself).
    */

    function isInCircle(x, y, a, b, r) {
        //((x-a)^2 + (y-b)^2) <= r^2
        let distance = ((x - a) ** 2) + ((y - b) ** 2);
        return distance <= r ** 2;
        
    }

    console.log("2, 3, 4, 5, 6:", isInCircle(2,3,4,5,6));
    console.log("2, 3, 14, 15, 6:", isInCircle(2,3,14,15,6));
    
}







// https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
// 1. Reverse Number

// Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223

console.log("\nExcercise 9");

{
    let num = parseInt(prompt("Enter a number:")) + 1;
    console.log("Take number +1 =", num); // Just to show its really a number.
    let numRev = String(num).split("").reverse().toString();
    console.log(String(num) + " reversed is", numRev);
}







// https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
// 114. Check String as Correct Sentence

// Write a JavaScript program to check whether a given string represents a correct sentence or not. A string is considered a correct sentence if it starts with a capital letter and ends with a full stop (.) 
console.log("\nExcercise 10");

{
    function isCorrect(str) {
        return (str[0] == str[0].toUpperCase() && str[str.length-1] == ".");
    }

    console.log("Det här är en riktig mening det.", isCorrect("Det här är en riktig mening det."));
    console.log("det här är inte en riktig mening.", isCorrect("det här är inte en riktig mening."));
    console.log("Det här är inte en riktig mening", isCorrect("Det här är inte en riktig mening"));
}






// https://www.w3resource.com/javascript-exercises/fundamental/index.php
// 33. Random Number in Range

// Write a JavaScript program to generate a random number in the specified range.
console.log("\nExcercise 11");

{

    let a = parseInt(prompt("Range from: "));
    let b = parseInt(prompt("Range to: "));

    console.log(`Random number between ${a} and ${b} is ${Math.floor(Math.random() * (b - a + 1)) + a}`);


}




// https://www.w3resource.com/javascript-exercises/fundamental/index.php
// 28. Measure Function Execution Time

// Write a JavaScript program to measure the time a function to execute.
console.log("\nExcercise 12");

// Using date? Lets try:
{

    function testa() {
        let a = 0;
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 500; j++) {
                for (let k = 0; k < 2000; k++) {
                    a = i - j + k ;
                }
            }
        }
    }


    let time1 = performance.now();
    testa();
    let time2 = performance.now();
    console.log(time2 - time1 + " millis to run testa()");

}


// 8. Pass Function as Parameter

// Write a JavaScript program to pass a 'JavaScript function' as a parameter.
{
    console.log("\nExcercise 13");
    function runAFunk(func) {
        func();
    }

    runAFunk(() => { console.log("This function was passed to another function.")});
}




// https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php
// 4. Sort String Alphabetically

// Write a JavaScript function that returns a string that has letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
console.log("\nExcercise 14");
{
    function sortChars(str) {
        return str.split("").sort().join("");  
    }

    console.log("tobias eriksson: " + sortChars("tobias eriksson: "));
}






// https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
// 134. Reverse Alphabetical Order of Lowercase Letters

// Write a JavaScript program to change the characters (lower case) in a string where a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a. 
// Click me to see the solution
console.log("\nExcercise 15");


// So a = 65. If we check the distance from 97 (asciCode - 97), then takes the same distance backwards from 122 (z), we should get the right answer.
{
    let str = "tobias eriksson e the best";
    let newStr = "";
    for (let i = 0; i < str.length; i++) { 
        if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
        let dist = str.charCodeAt(i) - 97;
        newStr += String.fromCharCode(122 - dist);
        } else {
            newStr += str[i];
        }
    }

    console.log(newStr);
}









{
    console.log("\n\n\nDagens lektion uppgift 1");
    // 1. Find maximum of any two numbers
    function findMax(num1, num2) {
        if (num1 > num2) return num1;
        if (num2 > num1) return num2;
    }

    let num1 = parseInt(prompt("SKriv nummer 1: "));
    let num2 = parseInt(prompt("SKriv nummer 2: "));
    console.log("Det högsta numret är:", findMax(num1, num2));

}


{
    // 2. If number is even print squiare of the number
    console.log("Dagens lektion uppgift 2:");
    let num =  parseInt(prompt("Ange ett nummer:"));
    if (num % 2 == 0)
        console.log("Upphöjt med två: ", num**2);
    else
        console.log("Var ej jämnt.")
}

// 3. Generate a random number and print it if is greater than 50
{
    let rndNr = Math.floor(Math.random() * 100) + 1;
    if (rndNr > 50) 
        console.log(rndNr);
}

