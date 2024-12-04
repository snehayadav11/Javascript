
// +++++++++++++++++++++++++++++++++++++++++++ CONTOL FLOW / LOGIC FLOW +++++++++++++++++++++++++++++++++++++++++++++++++++

// if(true){
//     return 0 ;
// }


//🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨
// < , > , <= , >= , != , == , ===  , !== -----> checks for the negative sign

if(2 == '2') {
    // console.log("executed");
     
}                                // o/p executed as it == only checks for the same value

if (2==='2'){
    console.log('executed1');
    
} // not shown anything coz nothin is wriiten outside of the if and since  === also matches datatype of the two values with the same value

// ⭐ !== -----> checks for the negative sign  ⭐ 

// if (true){
//     // yya toh ye execute hoga ya 
// }
// else{
//     // toh ye execute hoga
// } 
// condole.log("Yeh toh hmehsa hi execute hoga") 

//🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨
 //+++++++++++++++++++++++++++++SHORT HAND NOTATION +++++++++++++++++++++++++++++++++++++++++++

//const score = 1000
// if(score > 500) console.log("test passed"); // ye automatic maaan leta ki h yehi h itna ek line iske scope m

// suppose ek hi line ya bina scoe pass kiye multiple leine of code likhna h then

const score = 1000
if(score > 500) console.log("test passed") ,
console.log("test2"),
console.log("test3"); // highly non recommendable not a goood practice to write code

// CONTROL FLOW WE CAN SEE HOW ON NESTED IF CONTROL FLOW OCCURS OR EXECUTED


