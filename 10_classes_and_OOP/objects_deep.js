///// FROM INTERVIEW POINT OF VIEW QUESTION ////////////////////////////////////////

//  KYA HUM CONSTANT PI KI VALUE CHANGE KAR SKTE H TOH KRKE DIKHAO OR NAHI KAR SKTE TOH KYU NAHI KAR SKTE REASON

 //Object.getOwnPropertyDescriptor(Math)

 console.log(Math.PI); // 3.141592653589793

 // now if hum agar is value ko overwrite bhi krte h toh humko ye same value hi milega

 //Math.PI = 5
  //console.log(Math.PI); //3.141592653589793

//   dono m hi same value ayya toh isliye hum iska reason h ki jo javascript c++ dwara hardcore hua h usme ye writable false set hua h
//   or if ye check krna h ki writable , enumerable or such description then can use ↩️↩️↩️↩️↩️↩️↩️↩️↩️

//⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️
 //Object.getOwnPropertyDescriptor(Math)


//  const descriptor = Object.getOwnPropertyDescriptor(Math , "PI")  // math as a whole h but humko description PI PROPERTY ki dekhni h
//  console.log(descriptor);
 

 // OUTPUT

 /*
  {

  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false

  }
 */


  // likewise hum agar apna kuch bana rahe h toh hum uska descriptor khud hi change kar sakte h

  // HUM OBJECT AISE BHI CREATE KAR SKTE H

  //const mynewObj = Object.create(null)

//   const myDetail = {
//     name: "Sneha",
//     age: 23 ,
//     isAvailable: "true"
//   }

//   console.log(Object.getOwnPropertyDescriptor(myDetail));  aisa krne s undefined aaya kuki humne jis property ka descriptor chye vo likha hi nahi
  //console.log(Object.getOwnPropertyDescriptor(myDetail , "name"));

  /**
    {
  value: 'Sneha',
  writable: true,
  enumerable: true,
  configurable: true
}                           yeh writable iteratable h
   */
  

/////////////// KUKI YEH HMARA BANAYA HUA HI OBJECT H HUM ISKO DEFINE KAR SKTE H KI YE WRITABLE H YA NAHI

// Object.defineProperty(myDetail,"name", {
//     writable: false,
//     enumerable: false
// })

//console.log(Object.getOwnPropertyDescriptor(myDetail , "name"));

/* 
{
  value: 'Sneha',
  writable: false,
  enumerable: false,
  configurable: true
}
*/



//////// NOW LETS SEE KI ITERATABLE H YA NAHI /////////////////////////////////////

// for (let [key , value] of Object.entries(myDetail)) {
//     console.log(`${key} : ${value}`);
    
// }
/**
 * age : 23
isAvailable : true  isme name nahi ayya mtlb vo iteratable nahi hh
 */

// ab isme ek function add krenge or if else use krenge
const myDetail = {
    name: "Sneha",
    age: 23 ,
    isAvailable: true ,

    contactMe: function(){
        console.log("cant give phoneno.");
        
    }
  }

//   for (let [key , value] of Object.entries(myDetail)) {
//          console.log(`${key} : ${value}`);
        
//      }
     /* 
     name : Sneha
     age : 23
      isAvailable : true
      contactMe : function(){
        console.log("cant give phoneno.");
        
    } toh ab toda if else lagana padegaa
     */
    for (let [key , value] of Object.entries(myDetail)) {
        
        if( typeof value !== 'function')
        console.log(`${key} : ${value}`);
       
    }
