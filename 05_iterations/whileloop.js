////////////////////////////////////// WHILE LOOP  ////////////////////////////////////////////////////
//⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

let i = 0 ;            // initialization
while( i <= 10) {      // condition check
   // console.log(i)
    i += 2 ;           // increment
}


//////////////////////////////////////////// array in while loop /////////////////////////////////////////
//⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

const b = [ 'a' , 'b' , 'c' , 'd' , 'e']
let k = 0 ;

while( k < b.length){
    console.log(b[k]);
    k++
}



///////////////////////////////////////////////// DO-WHILE LOOP ///////////////////////////////////////////////////
// similary  , do while loop but in do while one execution always takes place as condition is checked later here
//⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

let a = 5;
do {
   // console.log(a)
    a++
} while (a<4); 

///////////////////////////////// lets understand this with an array
//⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

const Array = [1 , 2 , 3 , 4 , 5 ]
let arr =  0                        // intialization 
do {
    //console.log(Array[arr]);        
    arr ++                          // increment
} while (arr < Array.length );       // condition check

