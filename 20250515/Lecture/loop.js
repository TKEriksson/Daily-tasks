/*
for
while
do while
for in - each (?)

1valid entry condition
2valid exit condition
3valid increament / decreament

*/

for(let i = 0; i <= 5; i++) {
  console.log(i);
}

// To get something out of this i will play with while / do while / for of

{
  let i = 0;


  do {
    i++;
    console.log("this is a do while loop.");
  } while ( i < 10)
      
    i = 0
    while ( i < 10) {
      i++;
      console.log("This is a while loop.");
    }


const word = 'hello';

// So for of gets the values
for (const letter of word) {
    console.log(letter);
}

// for in gets the index (keys)-
for (const index in word) {
    console.log(index); 
    console.log(word[index]);
}

// Output:
// h
// e
// l
// l
// o


}


