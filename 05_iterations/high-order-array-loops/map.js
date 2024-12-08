//////////////////////////////////////////////////// MAPP IN JS ////////////////////////////////////////////////////////////////

const arr = [ 1,2,3,4,5,6,7,8,9,10]
// const values = arr.map( (item) => num + 10)                     // {} ye scope use liya hota toh muje return keyword lagana padta
// console.log(values);                                            // [ 5, 7, 9, 10 ] --> call back function map is a 


//// LETS SEEE CHAINING  MEANS TWO THREE METHODS TOGETHER⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
const values = arr
                   .map( (item) => item * 10)                     
                   .map( (item) =>item + 1)                     
                   .filter( (item) => item > 40)                  // filters returns for the true values only               
console.log(values);                                           

