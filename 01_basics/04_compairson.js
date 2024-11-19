/*
          Basics operations u are already aware of 
console.log( 2 < 2)
console.log( 2 <= 2)
console.log( 3 > 2)
console.log( 2 >= 2)
console.log( 2 == 2)
console.log( 3 != 2)

*/

// problem arises when u compare different datatypes which typescript do not allowed 
// typescripty just have certain striiict rules under which u have to write the code

// console.log( '3' > 2)
// console.log( '02' > 2)

// console.log( null  >  2)   this types of comparison is quite confusin so better avoid such comparisons with differnt datatypes
// console.log( null == 0)

// sometimes unpredictable output can be displayed when u compare two different datatypess

/* 🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨

comparison operator in javascript actually converts null into  a number and treating it as 0
therefore
null >= 0 //output true
and
null > 0 //output false 

*/

// === this in javascript compares the no and their data types to 

console.log('2'===2);  // output false

