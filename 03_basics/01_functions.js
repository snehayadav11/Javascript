// function addTwoNum( num1 , num2) { // define krte hue jo values pass krte h usko parameters bolte h
//     console.log(num1 + num2);
    
// }
//addTwoNum(2 , 3) // iss time jo values pass krte h usko arguements bolte h

// ab isko ek variable m store krte h

//let ans = addTwoNum(2 , 3);
//console.log("Ans " , ans) // ans ki value undefined h kuki yaha p function kuch return nhi kar raha h ans console k vajah s print ho raha h

// another way of writing function

// function addTwoNum( num1 , num2) { 
//     console.log("sneha yadav")
//     return(num1 + num2);
//     console.log("sneha yadav") // return k baad kuch b sode execute n hoga sneh  
// }
// let ans = addTwoNum(4,1)
// console.log('result : ' , ans);

//🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨

// display a just user logged in msg using function

// function userLoggedIn(username){
//     return `${username} just logged in`;
// }
//userLoggedIn(Sneha) // yeh display n hoga kuki just return krdega value fnction ko but kuki koi print command nhi h therfore print n hoga
//console.log(userLoggedIn("Sneha"));

//ABBBB WHAT IF ARGUMENTS M EMPTY STRING HO
//console.log(userLoggedIn("")); //just logged in

//🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨
//what if kuch bhi pass na kiya jaye

//console.log(userLoggedIn()); //undefined just logged in


// function userLoggedIn(username){
//     if(username === undefined){
//         console.log('Please enter a username');
//         return
//     }
//     return `${username} just logged in`;
// }
// console.log(userLoggedIn());

// abb agar humko empty kbi chye hi n toh hum ek default value de denge

function userLoggedIn(username = "Sneh"){
    if(username === undefined){
        console.log('Please enter a username'); // this block will never get executed in this case
        return
    }
    return `${username} just logged in`;
}
//console.log(userLoggedIn()); // Sneh just logged in 

//🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨

// SOMETIMES THERE ARE SCENARIO WHERE YOU DONT KNOW HOW MANY PARAMETER WILL BE PASSED IN THAT CASE HOW ITS DONE LETS SEE

// TO UNDERSTAND THAT LETS TAKE AN EXAMPLE OF SHOPPING CART PRICE

// function calculateCartPrice(num1){ // in this case u cant just keep a fixed no of parameters 
//     return num1
// }
// console.log(calculateCartPrice(200 , 400 ,2000)); // lets say here multiple no of arguments are passed or added in the cart by cx
// here in the o/p we will see the only first no is displayed ans = 200 

// lets solve this problem 

// function calculateCartPrice(...num1){ // in this case u  just used spread operator (here which is called REST OPERATOR) with parameters 
//     return num1
// }
//console.log(calculateCartPrice(200 , 400 ,2000)); // now o/p is in form of arrays [200 , 400 , 2000] later in which u can use loop nd can add them

function calculateCartPrice( val1 , val2 , ...num1){ //  🚨🚨🚨🚨 here now which value will be passed in num 1 is a ttrick question
    return num1
}
//console.log(calculateCartPrice( 200 , 400 , 2000 , 2024)); // here first 200 value go as value 1 , 400 as val2 rest go as num1
// since we are only returnin num1 therefore O/P is [2000,2024]
 
////////////////////////////////////LETS SEE HOW OBJECTS ARE PASSED IN FUNCTIONS /////////////////////////////////////////////////////////

// const user = {
//     username: 'sneha' , 
//     email: 'snehay335@gmail.com'  // 1 object creation hua then passed into function
// }
function handleObject(anyObject){
    return `username is ${anyObject.username} , and an email is ${anyObject.email}`
}
//console.log(handleObject(user)); 
// let directly pass object into function

/*console.log(handleObject({
    username: "Sneha" , 
    email: "snehay335@gmail.com"
}));*/

/////////////////////////Lets see how array is passed into function and that function returns second value of that array

//const arr = [100 , 200 , 300 , 400 ] // can also do without declarin array

function returnSecondValue(getArr){
    return getArr[1]
}
//console.log(returnSecondValue(arr));
console.log(returnSecondValue([100 , 200 ,300 , 400])); // O/P ---> 200


