/////////////////////////////////////////////////////// FOR IN LOOP /////////////////////////////////////////////////////////

const myObj = {
    js : "Javascript",
    cpp : "C++",
    rb : "Ruby",
    py : "Python"
}

for (const key in myObj)
 {
                     //     if (Object.prototype.hasOwnProperty.call(object, key)) {             its not needed right now
                    //         const element = object[key];
                    //   
                    //}

//console.log(key);       🚨🚨🚨🚨🚨🚨 (key) likhe toh humko sirf key mila object m

/*
js
cpp
rb
py 
*/

}

for (const key in myObj){
   // console.log(myObj[key]);    🚨🚨🚨🚨🚨🚨 (myObj[key]) toh humko value ,mila

    /*
    Javascript
    C++
    Ruby
    Python
    */
    
}




// lets combine the above two ways 


for (const key in myObj){
    //console.log(`${key} shortcut for ${myObj[key]}`);

    /*
    js shortcut for Javascript
cpp shortcut for C++
rb shortcut for Ruby
py shortcut for Python
*/
    
}

///////////////⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
//////////////LETS SEE CAN WE USE THI FOR IN LOOP IN ARRAY TOO OR NOT //////////////////////////////////////////////


const myArr = ["Js" , "Rb" , "Py" , "Cpp"]
for (const key in myArr){
   // console.log(key);  
    /*                   
    0
    1               humko yahn p array ka b keys mila means index mila na ki value 
    2               so we can understand that the basic diffn between for o and for in is for of directly returns value where as 
    3               for in returns key .
    */              // we already discussed above how to get key values so lets get that
}


//const myArr = ["Js" , "Rb" , "Py" , "Cpp"]
for (const key in myArr){
    //console.log(myArr[key]);  
    /*
    Js
    Rb                                    // GOT THE VALUES TOO OF A myArr
    Py
    Cpp
    */
}


/////////////////////////////////////🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
// let see ki map iterate hota h ki nahi for in loop s for of loop s toh ho jata h

const map = new Map()
map.set('1',"India")
map.set('2',"Usa")
map.set('3',"France")
map.set('3',"France") 

for (const key in map) {
    console.log(key);
    
}// ye kuch b run hua  next line m pass hogya sidha that means ye iterate n hoga for in loop m