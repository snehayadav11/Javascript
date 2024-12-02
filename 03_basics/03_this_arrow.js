
//+++++++++++++++++++++++++++++++ ⬇️ THIS REFER TO A CURRENT OBJECT IN A SCOPE  ⬇️ +++++++++++++++++++++++++++++++++++++++

const user = {
    userName : "Sneha" ,
    Price: 299 , 
    welcomeMsg : function (){
        console.log(`${this.userName} , Welcome to the website`);
       // console.log(this);
        
    } 
}
// user.welcomeMsg() // Sneha , Welcome to the website 

// // since this is about current context lets change the context 

// user.userName = 'Anu' // since yaha p current username Anu h therefore ⬇️ is the o/p ↩️
// user.welcomeMsg()  // Anu , Welcome to the website ⬅️

// ⭐⭐⭐⭐⭐⭐🚨🚨🚨🚨🚨🚨⭐⭐⭐⭐⭐⭐🚨🚨🚨🚨🚨🚨
// ++++++++++++++++++++++++++ AB LETS SEE GLOBAL P THIS KI KYA VALUE ATTTI H NODE P +++++++++++++++++++++++++++++

//console.log(this); // {} 
// GLOBAL P THIS KI VALUE ATTI H {} EMPTY IN NODE BUT WHEN U GONNA CHECK ON BROSER U WILL FIND WINDOWS ↩️
 // Window {window: Window, self: Window, document: document, name: '', location: Location, …}⬅️

 // reason pele js sirf browser p rumn krta tha jo abi standalone hogya h isliye browser m window dikhata h or node m empty

 // ⭐⭐⭐⭐⭐⭐🚨🚨🚨🚨🚨🚨⭐⭐⭐⭐⭐⭐🚨🚨🚨🚨🚨🚨
 // ++++++++++++++++++++++++++ AB THIS KI VALUE FUNTION K ANDAR DEKHENNGE  +++++++++++++++++++++++++++

 function one(){
    let userName = "Sneha"
    // 1 console.log(this);
    console.log(this.userName); // undefined is the output because THIS only work with the OBJECTS
 }
 //one(); // here we got so many things like global and many more such values 
 // now lets add one more entity to this function and see whether it works on or it or not --->username

 //⭐⭐⭐⭐⭐⭐🚨🚨🚨🚨🚨🚨⭐⭐⭐⭐⭐⭐🚨🚨🚨🚨🚨🚨
 // +++++++++++++++++++++++++++++++++ ARROW FUNCTION ++++++++++++++++++++++++++++++++++

 const two = () => {
    let userName = "Sneha"
     console.log(this);   // arrow function m ye { } output dera h this
 }
 //two();

 // ++++++++++++++++ LETS DISCUSS BIT ABOUT ARROW FUNCTION  ++++++++++++++++++++++++++++++
 
 // BASIC SYNTAX OF ARROW FUNCTION  () => {}

// const addTwo = (num1 , num2) => {
//     return num1 + num2 ;   ⭐ EXPLICIT RETURN METHOD ⭐ EXPLICITY RETURN LAGANA PAD RAHA H
// }     step 1 🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨    kuki yahan curly braces use kiye h toh return key word use krna pdega
// console.log(addTwo(1, 4 ));

// +++++++++++++++++++++++ ⭐IMPLICIT RETURN⭐ METHOD ALTERNATE OF ARROW FUNCTION WHEN ONLY ONE LINE OF CODE IS THERE ++++++

// REMOVE THE CURLY BRACES AND THE RETUREN KEYWORD ⬇️⬇️⬇️

// const addTwo = (num1 , num2) => num1 + num2 ;  // ↩️↩️↩️
// console.log(addTwo(1, 4 ));  /// step 2  🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨 ONE MORE ALTERNATIVE


// const addTwo = (num1 , num2) => ( num1 + num2 )
// console.log(addTwo(1, 4 ));  /// step 3 🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨 return n likhna pdega kuki open bracket use kiye h useful ⭐ in REACT ⭐


// const addTwo = (num1 , num2) =>  {userName : " Sneha"} // yaha p object return kar rahe h jiska o/p undefined h kuki object ko parenthesis m wrap krna hota h
// console.log(addTwo(3,4)) // undefined

const addTwo = (num1 , num2) =>  ({userName : " Sneha"})
console.log(addTwo(3,4)) // { userName: ' Sneha' }