//
// mainly two types of datatypes exist in terms of memory allocation


// PRIMITIVE ----> STRING NUMBER BOOLEAN NULL UNDEFINED SYMBOL BigInt

/*

⭐⭐ primitive data types like string number etc are based call by value which means 
if they are copied or any sort of task is performed on that data or variable then 
its performed on the copy of the data instead of the original data⭐⭐

// NON-PRIMITIVE / REFERENCE TYPE ----> ARRAY OBJECT FUNCTIONS

/*🚨🚨🚨 

 JAVASCRIPT IS DYNAMIC OR STATIC IN NATURE

 JavaScript is considered a dynamically typed language. Here are some key points about its nature:

Dynamic Typing: In JavaScript, you don’t need to declare the type of a variable when you create it. 
The type is determined at runtime based on the value assigned to the variable. For example:

let value = 42;      // value is a number
value = "Hello";     // value is now a string


  🚨🚨🚨

  ⭐⭐
  
  LETS SEE HOW SYMBOL IS DECLARED

  const id = Symbol('123')
  const anotherId = Symbol('123')
  
  console.log( 'id' === 'anotherId' ) OUTPUT FALSE BECAUSE SYMBOL UNIQUELY DEFINES IT EVENTHOUGH THEY HAVE SAME VALUE PASSED

  ⭐⭐


  ✅✅✅
  
  LETS DECLARE REFERENCE TYPE / NON PRIMITIVE DATATYPES

  ⭐ ARRAY ⭐
   
  const fruits = ['apple' , 'orannge' , 'kiwi' , 'banana'] ;

  ⭐ OBJECT ⭐

  let myObj = {
  
     name = 'sneha'
     age = '22'
     city = 'bhilai'

  }

  ⭐ FUNCTION ⭐

  let myFunction = function(){
  
   console.log("hey there") ;

  }
  
  ✅✅✅

  */