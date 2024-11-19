
/*  ➡️ typeof can be used in two ways ⬇️

1. console.log(typeof null)

2. console.log(typeof (null))  also known as method function

*/

let score = "22abc"   
console.log(typeof score)  // o/p string

//score = "22"
//console.log(typeof score) 

let valueInNumber = Number(score)
console.log(typeof valueInNumber)  // o/p  Mumber

//score = "22abc"
//console.log(typeof valueInNumber)
//console.log(valueInNumber) // o/p --> NaN that meANS it is not a number;

/*
33 --> = number (33)
22abc --> NaN
true --> 1 / false --> 0
null --> 0 / NaN 
undefined --> Nan 
                  lekin NaN ka datatype no hi h kuki yahan convert Number m kara rahe h
*/

/* let isLoggedIn = 1

 let booleanIsLoggedIn = Boolean(isLoggedIn)
 console.log(booleanIsLoggedIn)

 OUTPUT = true

 */

// let isLoggedIn = ""

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn) 

// OUTPUT = FALSE

// let isLoggedIn = "Sneha"

//  let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn) 

// OUTPUT = TRUE

/*

1 => true , 0 => false
""=> false , "sneha"=> true

*/

// similary can also convert number to a string and boolean or with many other datatypes

/*⭐ opertions that u are already aware with ⭐  

console.log(2 + 2)
console.log(2 - 2)
console.log(2 / 2)
console.log(2 % 2)
console.log(2 ** 2)  //  2 raise to power 2

*/ 

//⭐ opertions that u need to aware with ⭐  

// console.log(1 +'2')        // 12
// console.log('1' + 2)       // 12
// console.log("2" + 2 + 2)   // 222  since first is strinj therfore all the after char will also be treated as strinj
// console.log(2 + 2 + '1')   // 41 

// prefix and postfix to read from MDN Docs







