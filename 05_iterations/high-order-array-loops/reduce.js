///////////////////////////////REDUSE IN JS ////////////////////////////////////////////////////

const arr = [1,2,3]
// const total = arr.reduce(function (acc,curval){  // acc = accumulator , curval =  current value or zero s assign rehta h initial value acc ka uske bad vo 
//     return acc + curval ;                        // 0 + cur value krta h arr s fr sum ko acc ka next avalue consider kar leta h for eg 0 + 1   
// }/*,0*/)                                        // yahan p acc ko 0 s assign nahi kiya still vo value 6 dera h,,,,1 +2 ,, 3+ 3  = 6 ans
// console.log(total);

///////////////////////////////////////// LETS PERFORM THE SAME USING ARROW FUNCTION //////////////////////////////

const value = arr.reduce((acc,curr) => acc + curr , 0)
console.log(value);