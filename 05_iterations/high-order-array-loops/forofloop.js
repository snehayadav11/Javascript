///////////////////////////////////////////////////////////////// FOR IN LOOP /////////////////////////////
// BASIC SYNTAX

// for (const element of object) {
//     // here element can be changed as wish or needed as its the name of a variable say
// and object refers to any string , array and object in which loop has to be used
//}

const array = [1 , 2, 3 , 4, 5]
for (const i of array) {
    //console.log(i);
                                    // no need to incree or decree the i in an array
} 


/////////////////////////////////////////////LETS USE FOR OF LOOP IN STRING /////////////////////////////////////
const greetings = "Helllo World!"
for (const greet of greetings) {
    //console.log(greet)
}

///////////////////////////////////////////////////////////////  MAPS KNOWN FOR THE UNIQUE VALUES AND AS INPUT AS OUTPUT ORDER 
// MAPS HOLDS KEY VALUE PAIRS LIKE OBJECTS 

const map = new Map()
map.set('1',"India")
map.set('2',"Usa")
map.set('3',"France")
map.set('3',"France")  
            // this value will not be displayed as it holds and displays uniue values only

//console.log(map);

// OUTPUT         Map(3) { '1' => 'India', '2' => 'Usa', '3' => 'France' }

///////////////////////////////////////// LETS USE FOR OF LOOP IN MAP //////////////////////////////////////////

for (const key of map) {
   // console.log(key);
    
}

/*           OUTPUT   [ '1', 'India' ]
                      [ '2', 'Usa' ]
                      [ '3', 'France' ]
*/

//         [ARRAY DESTUCTURE]
for (const [key, value] of map) {
   // console.log( key ,':-' , value);
    
}


/*  ---> OUTPUT

1 :- India
2 :- Usa
3 :- France

*/

///////////////////////////////////////////////// lets  see ye for of loop ya ye objects m kam krta h //////////////////////

const myObj = {
    1:"Sneha",
    2:"Yadav"
}
for (const [key, value] of myObj) {
     console.log( key ,':-' , value);           // myObj is not iterable is the output that means we cant use for loop of in obj has to use different method to iterate
     
 }


 //////////////////// NOW TO ITERATE OVER OBJECT WE GONNA USE FOR IN LOOP : 