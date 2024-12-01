// let a = 22 ;
// const b = 1 ;
// var c = 200 ;
// console.log(a  , b , c ); OUTPUT (22 , 1 , 200)

let a = 2201 ; // here a is in global scope

if(true){
    let a = 22 ; // just in this scope a is 22 oyherwise outside these scope its 2201
    const b = 1 ; // b is in local scope  
   //  var c = 200 ; dont use
}
//console.log(a);   // a is not defined
//console.log(b); // b is not defined
//console.log(c); // Output ----> 200 
// here is the reason why we should not use var because it do not follow scopes that might create problem 

//console.log(a);

//🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨✅✅✅✅✅🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨⬇️

// ALWAYS REMEMBER IF U LL CHECK THE VALUE OF SCOPE IN BROWSER ITS DIFFERENT THEN THE VALUE U CHECK IN NODE FROM INTERVIEW POV

// lets see the nested scope

function one(){
    const firstName = 'Sneha'

    function two(){
    const lastName = 'Yadav' 
    //console.log(firstName);
    }
    //console.log(lastName);// yahan ye run nhi hoga kuki  isko two k sope s bahar print karaya jaraha h
    two() // or kuki upar line error h or line by line execute hota h toh isliye baki k line execute hotr hi n h
}
//console.log(two()); // ye run n hoga kuki ye one scope wale function m h toh usko call krna pdega pehle
one() // yahan kuch execute n hoga kuki print krne k liye one m koi command hi n h 


//+++++++++++++++++++++++++ LETS SEE A BIT ABOUT HOSTING WHICH IS INTERESTING +++++++++++++++++++++++++++++++++++++++++++


//addOne(4) // ye execute hoga or o/p 5 dega but voi agar second way s function declare krte h toh vo error dega 
function addOne(num){
    return num + 1 ;
}
addTwo(3) //addTwo is not defined Cannot access 'addTwo' before initialization
const addTwo = function(num1){
    return num1 + 2
}
// addTwo(3) it will be executed