///////////////////////////////////////////// FOR EACH LOOP /////////////////////////////////////////////////////

const arr = [1 , 2 ,3 ,4 ,5 ]

//FOR EACH LOOP
 
//arr.forEach( function (val)  // kuki ye call back function h isliye is function ka nam nahi hoga 
//{
  // console.log(val);
   
//})

// LETS DO THE SAME THING BY USING ARROW FUNCTION

// arr.forEach( (item) => {
//     console.log(item);
// }) // o/ p ----> 1 2 3 4 5 

// function bana k bhi pass kr skte h

function printMe(item){
    //console.log(item);
}
arr.forEach(printMe) // printMe() aise pass n krna h kuki uska refrence dena h yahan naki execute krna h 

////////////// for each k andar sirf ek item hi n pass krskte h blki kafi kuch pass kr skte h lets see

arr.forEach((item , index , arr) => {
    //console.log(item , index , arr);

})
/*
1 0 [ 1, 2, 3, 4, 5 ]
2 1 [ 1, 2, 3, 4, 5 ]
3 2 [ 1, 2, 3, 4, 5 ]              -----> OUTPUT
4 3 [ 1, 2, 3, 4, 5 ]
5 4 [ 1, 2, 3, 4, 5 ]
*/ 

// lets discuss this one [{},{},{}]

const myCoding = [
    {
        languageName : "Javascript",
        languageFile : "js"
    },
    {
        languageName : "Java",
        languageFile : "java"
    },
    {
        languageName : "CPP",
        languageFile : "C++"
    }
]
myCoding.forEach( (item) => {
    console.log(item.languageName);
    
})