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






