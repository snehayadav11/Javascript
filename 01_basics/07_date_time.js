let mydate = new Date();

//console.log(mydate); // o/p 2024-11-20T14:10:44.824Z (its not that clear)

//console.log(mydate.toString()); // o/p Wed Nov 20 2024 14:11:36 GMT+0000 (Coordinated Universal Time) [quite clear]

//console.log(mydate.toDateString());  o/p Wed Nov 20 2024

//console.log(mydate.toISOString()); o /p 2024-11-20T14:17:51.062Z

//console.log(mydate.toJSON());  o/p  2024-11-20T14:20:01.591Z

//console.log(mydate.toLocaleDateString()); o/p 11/20/2024

//console.log(mydate.toLocaleString()); o/p 11/20/2024, 2:22:30 PM 

//console.log(mydate.toTimeString()); o/p 14:23:45 GMT+0000 (Coordinated Universal Time)

//🚨🚨🚨 INTERVIEW QUESTION 🚨🚨🚨

// WHAT IS THE TYPE OF THIS DATE FUNCTION SO IT IS AN OBJECT

//console.log(typeof mydate); // O/P OBJECT 

// let take an example to create a specific date

//let myCreatedDate = new Date(2024 , 4 , 23) ;

//console.log(myCreatedDate.toDateString()); 

//let myCreatedDate = new Date(2024 , 4 , 23 , 5 , 30) ;

//console.log(myCreatedDate.toLocaleString()); 

//  o/p 5/23/2024, 5:30:00 AM i want this time in pm

//myCreatedDate.setHours(myCreatedDate.getHours() + 12); // Convert to PM

//console.log(myCreatedDate.toLocaleString()); 

// OUTPUT 5/23/2024, 5:30:00 PM

//let myCreatedDate = new Date("05-23-2024")



//let myTimeStamp = Date.now() ; // timestamp is generally used in polling tstuffs to know who did at first 

//console.log(myTimeStamp);  // o / p --> 1732116119431 and these values are compared to decide first or second

//console.log(myCreatedDate.getTime());//Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC. about
// gettime ()

// january 1970 s leke abitak ka time h milisecond m

// 🚨🚨🚨🚨  INTERVIEW QUESTION  🚨🚨🚨🚨

 // TO CONVERT MILLISECOND TIME TO SECOND THEN FORMULA IS TO DIVIDE THE TIME BY 1000 BUT IT GIVES THE ANS 
 //IN DECIMAL SO TO AVOID THAT 

 //console.log(Math.floor(Date.now() / 1000));
 




