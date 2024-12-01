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
console.log(userLoggedIn()); // Sneh just logged in 