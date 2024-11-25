// const arr1 = ['voltas' , 'samsung' , 'redemi']

// const arr2 = ['washing machine' , 'television' , 'mobile']

// arr1.push(arr2);
// console.log(arr1);

// console.log(arr1[3][0]); gives output 3 s element s zeroth index which is washing machine

//🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨

//////////   CONCAT  METHOD OF ADDING TWO ARRAYS   //////////////////////

//  const newArr = arr1.concat(arr2)
// console.log(newArr);  // o/ p [ 'voltas', 'samsung', 'redemi' ] so beter use differnt variable and then see the result

//🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨

///////////////////////////////////// spread method ////////////////////////////////////////////

// const newArr = [...arr1 , ...arr2]
// console.log(newArr);

//🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨

/////////////////////////////////////  ABOUT FLAT METHOD  ////////////////////////////////////////////

///////const A = [1 , 2 , 3 , [4 , 5 , 6] , 7 ,[6 , 7 , [4 , 5 ] ] ]

///const B = A.flat(Infinity) // incase of infinity we should pass exact depth means the no of sub arrays

//flat(depth?: any): any[]
////The maximum recursion depth
//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

//console.log(B);

//console.log(Array.isArray('Sneha')); // asking whethe ris array or not

// CAN ALSO CONVERT TO ARRAY USUALLY WHEN DATA IS SCRAPPED AS WORKING OR LOOPINING IN ARRAY IS FEASIBLE

//console.log(Array.from('Sneha'));

// from(iterable: Iterable<string> | ArrayLike<string>): string[]
// An iterable object to convert to an array.


// Creates an array from an iterable object.

//console.log(Array.from({name: 'Sneha'})) // in this case might return empty string as have not prompted to convert array from key value pairs

// OUTPUT ----> []

let A= 100
let B = 200 
let C = 300

console.log(Array.of(A , B , C))






