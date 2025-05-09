// i need to remind myself how to use prompt-sync
const prompt = require("prompt-sync")({ sigint: true }); // the sig-int option allows you to use Ctrl+C to exit the prompt, so why not?


let test = prompt("Enter a test string: ");
console.log("Test string: ", test);


// It has been 4 months. So i will practice all the basics again, and then maybe focus on learning the more advanced... Okey co-pilot pointed me to look into:
// 
//  stuff like async/await and promises. I will also try to learn about the new features in ES2023, like the new Array methods and the new String methods. I will also try to learn about the new features in Node.js 20, like the new File System API and the new Web Crypto API. I will also try to learn about the new features in React 18, like the new Concurrent Mode and the new Suspense API. I will also try to learn about the new features in Express 5, like the new Router API and the new Middleware API. I will also try to learn about the new features in MongoDB 6, like the new Aggregation Framework and the new Change Streams API. I will also try to learn about the new features in Mongoose 7, like the new Schema API and the new Model API. I will also try to learn about the new features in Jest 29, like the new Mocking API and the new Testing Library API. I will also try to learn about the new features in Cypress 10, like the new Testing API and the new Dashboard API.

//BTW, i dont use co-pilot other then to look up things to LEARN and to better my code.
// // We will see about all that, but now basics.. (turning co-pilot off)


//excercise 1

/*
1. Display Current Day and Time
https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/

let date = new Date();

let day = date.getDay(); // Gets days as a integer starts with 1.
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Today is : " + days[day]); // -1 to change range to 0 - 6 (index for array days).
let hours = date.getHours();
let ampm = date.getHours() >= 12 ? "pm" : "am"; // pm if > 12.

hours = (hours % 12 || 12); // Initally i did not handle the case when the hour is 12, but after comparing to the solution and noticed i fixed it. If getHours() % 12 == 0 then its like it "false" so with the || operator we change it to 12. 

console.log("Current time is " + hours.toString().padStart(2, "0") + ampm + " : " + date.getMinutes().toString().padStart(2, "0") +" : " + date.getSeconds().toString().padStart(2, "0")); // .padStart is giving the correct format for 2 digits.







