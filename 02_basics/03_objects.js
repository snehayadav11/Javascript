/////////////   OBJECTS CAN BE DECLARED IN TWO WAYS EITHER IN THE FORM OF LITERALS AND CONSTRUCTOR

////////////    IF DECLARED WITH CONSTRUCTOR THAN ONLY ITS IS SINGLETON 

/////// OBJECT DECLARED IN THE FORM OF LITERALS

const mySym = Symbol('myKey1')

const myObj = {

    name : 'sneha' ,
    fullName : 'sneha yadav' ,
    age : 23 ,

   // mySym: 'myKey1' , mySym datatype = string

   [mySym]: 'myKey1' , // const mySym: typeof mySym ---> SYMBOL

    email : 'snehay335@gmail.com' ,

    loggedInDays: ['Monday' , ' Tuesday']  // object m arrays b pass kar skte h , object b pass kar skte h
}

    // koi value change krna h toh 
  
    myObj.email = "sneha.as.221@gmail.com" ;

    // koi changes nahi hone dena h toh
    
    //Object.freeze(myObj)
    myObj.email = "yadavsneha776@gmail.com" ;

    //console.log(myObj);
    
/* 

freeze(f: Function): Function
Object on which to lock the attributes.


Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

*/

//🚨🚨🚨    Way of accessing object              🚨🚨🚨

//console.log (myObj.name);
//console.log(myObj['fullName']);

/* objects declare krte time jo key h means left wale ko string hi consider kiya jata h isliye unko 'quotes' m n likhna

pdta but if unko 'quotes' m likhte h na toh objectName.value krke access n kr skte isliye object access krne ka second  

trika shi h   */

//symbol ko hmehsa aise likhte h [mySym]

//////  OBJECT DECLARED IN THE FORM OF CONSTRUCTOR WHERE SINGLETON IS FORMED

// Object.create

// DECLARATION OF SYMBOL YE WALA POINT AISE AAYA KI IF INNTERVIEW M PUCHA JAYE KI SYMBOL LO OR USKO VALUE ASSIGN KRKE PRINT KARADO


myObj.greeting = function(){
    console.log("hello world");
    
}
myObj.greetingTwo = function(){
    console.log(`hellloo,${this.name}`); // backtick laga k $ {} is known as string interpolation
    
}
console.log(myObj.greeting) ;       //     [Function (anonymous)]

console.log(myObj.greetingTwo);    //      Function (anonymous)]

console.log(myObj.greeting()) ;       //    hello world iske sath undefined b aaya 

console.log(myObj.greetingTwo());    //    hellloo,sneha iske sath bhi undefined display kiya o/p m

