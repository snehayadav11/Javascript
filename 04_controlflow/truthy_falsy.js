//🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨
// ++++++++++++++ there are ceretain value where we assume that it might be true or it might be false only +++++++++++++++++++

// const userEmail = "sneha@ai.com"

// if(userEmail) // see yahan pe koi comparison n h lekin isko man liya gya sahi h or "got the user email" output aagya isko truthy value bolte h

// {
//     console.log("got the user email");
// }else

// {
//     console.log("dont have the user email");
    
// }

// Lets empty the user email and see it wil  considerd as falsy string 🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨

// const userEmail = ""

// if(userEmail)                             //  isko falsy consider kiya gya or else execute hua
// {
//     console.log("got the user email");
// }else

// {
//     console.log("dont have the user email");      // dont have the user email
    
// }
// const userEmail = []                      // ye empty array h fr b isko truthy consider kiya gya

// if(userEmail)                             //  isko truthy consider kiya gya or if execute hua
// {
//     console.log("got the user email");    //// got the user email
// }else

// {
//     console.log("dont have the user email");      
    
// }

// SO WE CAN SEE ITS QUITE CONFUSIN AS "WHEN STRING EMPTY" COnsiderd as falsy while []"if array is empty considered as truthy"
//so lets see wht all rules are there which fallls under truthy or falsy

//🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨

// false , 0 , -0 , BigINT 0n , "" , null , NaN , undefined

///////////////////////////////////////////////////////////LETS SEEEE TRUTHY VALUES TOOO

//    '0' , " " , " false " , [] , {} ---> empty object , function () {} --->empty function parenthesis amd scope also truthy value
// check krna  h ki array empty h toh kese chek krna h
// if(userEmail.length === 0 ){
//     console.log("Array is empty"); // Array is empty output
    
// }


//🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨
// SIMILARY AGAR OBJECT EMPTY H KI N CHECK KRNA H TOH

// const emptyObject = {}
// if (Object.keys(emptyObject).length === 0 ){
//     console.log("object is an empty");
    
// }                                           // object is an empty


// PLEASE TAKE NOTE OF THIS AND TRY TO RUN THIS IN BROWSER

/* 

false == 0 -----> true
false == '' ----> true
0 == '' -----> true

*/



//⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

//Nullish Coalescing Operator (??): null undefined 

// let val1 ; 
// //console.log( val1 = 5 ?? 10);               //5
// //console.log( val1 = null ?? 10);           //10
// console.log( val1 = undefined ?? 15);        //15

//iska mtlb ye h ki jo b null ya undefined value hota h usko null hata k dusra pehla value assign kr deta h 

//  val1 = 5 ?? 10 ; 


/////////////////////////////////// SIMILAR TO THOSE OF LETS DISCUSS A BIT ABOUT TERNARY OPERATOR

//                 CONDITION ? TRUE : FALSE      (BASIC SYNTAX)

let ChoclatePrice = 100 ;

ChoclatePrice >= 55 ?  console.log("Amul Dark Choclate") :  console.log(" Dairy Milk Cracker ")  ;