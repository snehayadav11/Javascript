// const user = new Object() // singleton or constructor o/p ---> {} empty object

// const user = {} // same o/p {}
// console.log(user); 

const user = {}     // empty object declaration

// assign key value pairs

user.name = 'Sneha'
user.age = 23
user.email = 'snehay335@gmail.com'
//console.log(user);  

/// meging of an object 🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨

const o1 = {1: 'a' , 2: 'b'}
const o2 = {3: 'c' , 4: 'd'}

//const o3 = {o1 , o2}
 //           console.log(o3); // ---->  o/p { o1: { '1': 'a', '2': 'b' }, o2: { '2': 'c', '3': 'd' } }

// //////////////////////another method of mergging o an objectt  🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨

// const o3 = Object.assign({}, o1 , o2)
// console.log(o3);  { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨
///////////////////////////// most preferable or latest method of merging an array is spread method 

const o3 = {...o1 , ...o2}
// console.log(o3); o/p { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


//🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨
// hum kisi bhi objects ka key nikal skte h by using this method or fr usme loop laga k kafi kuch kiya ja skta h

// console.log(Object.keys(user)); 0/p ---> [ 'name', 'age', 'email' ] loop isliye lagaskte h kuki keys array k form m milta h
//console.log(Object.values(user)); [ 'Sneha', 23, 'snehay335@gmail.com' ]

 /* console.log(Object.entries(user));
 [
  [ 'name', 'Sneha' ],
  [ 'age', 23 ],
  [ 'email', 'snehay335@gmail.com' ]
]

yahan ek ek key value ko ek array consider kiya jata h entries m

*/

//if dekhna h objects m yeh value h ya ni 
console.log(user.hasOwnProperty('age')); // gives ans in boolean --> which is true 


// objects k bhot sare prototype h jo u can find in inspect and go through each one of them

