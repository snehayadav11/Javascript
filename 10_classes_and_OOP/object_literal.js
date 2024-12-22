// object literal means mtlb sch m ek object hi hota h like normal object banate h voi hota h object literal

//const user = {

//1
//     username: "Sneha" ,
//     password: "123" ,      // toh ye sb properties hogaye ek method bhi bana lete h 
//     age : 23,

//     // 2
//     getUserDetails: function(){
//         console.log("Got user details form database");
//         // toh ye sab toh print hua sath m ek undefined bhi aaya h vo dekhnge y?
//         console.log(`Username: ${this.username}`);
//         console.log(this);
        
//     }
// }
//console.log(user.username );
//console.log(user.getUserDetails())
//console.log(this); //  global m this ko access krenge toh {} empty object ayga lekin
// agar browser m krnge this global ko print toh hame vaha window aise bhut sare chize milti h



////////// NOW LETS TALK ABOUT CONSTRUCTOR FUNCTION ///////////////////////////////

const date = new Date()
// toh ye jo new h vo constructor h jo allow krta h ki ek function s uska multiple instance bana ske

function user(username , password , age){
    //username = username 
    // ye aksar dono same hota h ki iss variable m yeh parameter ki value assign kardo
    // toh confusion hota h isliye this .username use krenge variable k liye
    // toh easily samj aajata h

    this.username = username
    this.password = password
    this.age = age

    //return this // jb new use krte h toh ye n likhenge  toh b new k karan vo chlta hi h
    // ab pura object ajyga
}

//const userone = user("sneha" , "123", 23)  // yehi chiz object m banate or dusra enter krna hota toh vpash s pura
// console.log(userone);      // entry krna pdta jo ki yahan ni krna h ek bar bnaya value pass krte jao


// problem kaha aata h jese hi humne user two banaya lekin print userone hi karaya fir b value jo thi vo usertwo ki aayi
// jo ki print bi n karaye kuki vo override hogya jo acchi baaat nahi h
// toh iss se bachne k liye new use krte h constructor m

const userone = new user("sneha" , "123", 23)
const usertwo = new user("aman" , "12345", 22)
console.log(usertwo); 
console.log(userone); 



/////////////   NOTES about neww some liines on new /////////////////////////////

/**
 
 * new keyword jese hi lkhe h toh ekk empty object create hota h jisko instance bolte h
 * constructor function jo vo new keyword k karan call hota h yeh jo b parameters hote h usko pack krta h or humko de deta h
 *  function user(username , password , age) ---->parameter
 * this k andar jo b arguments hote h vo inject ho jate h
 * new user("sneha" , "123", 23) -----> arguement
 * fr humko mil jata h function k andar
 * 
 * 
 * run about constructor property that is INSTANCEOF
 
*/

