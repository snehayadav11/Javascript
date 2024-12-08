/////////////////////////////////////// FILTER IN JS ///////////////////////////////////////////////////////////////////////////

const arr = [ 1 , 2 , 3 , 4 , 5  , 7  , 9 , 10]

// let values = arr.filter((item) => item > 4 )                // filter is a callback funtion and just like arrow function here is a single line code therfore curly braces not needed
// console.log(values);                                        // ---> [ 5, 7, 9, 10 ] FILTER M VALUE DIYA OR USKE SATH EK CONDITION DIYA


//() parenthesis lagaye toh khud return hogya 
// or {} ye use krte toh kuki scope chalu hogya toh humko return likhnma pdega lets see by code


// let values = arr.filter((item) => {
//     return item > 4
// } )                // filter is a callback funtion and just like arrow function here is a single line code therfore curly braces not needed
// console.log(values);                                          // [ 5, 7, 9, 10 ]


// ab isko humko for - each - loop s hi chye humne dkha ki for each s hum kuch return n kara pare the toh lets see kese krte h

// const arr = [ 1 , 2 , 3 , 4 , 5  , 7  , 9 , 10]

const values = []
arr.forEach((item) => {
    if(item > 4){
        values.push(item)
    }
})
console.log(values);                                 //[ 5, 7, 9, 10 ]