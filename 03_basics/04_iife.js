
// +++++++++++++++++++++++++++ IMEDIATELY INVOKED FUNCTION EXPRESION +++++++++++++++++++++++++++++++++

// REASON BEHNIND USING IIFE IS THAT SOMETIMES IN THE CODE BCAUSE OF GLOBAL VARIABLE CODES GET POLLUTED SO TO GET RID OF THOSE PROBLEM USE(IIFE)

// ( ye laga do toh b ek block ban jata h jiske andar kaam kiya ja skta h


//     NAMED IIFE⬇️⬇️⬇️⬇️⬇️🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨
//⬇️          ⬇️
   (function one (){                        // bracket before function is just as this has to doe or retun
        console.log(`Db Connected`)
})() ;                             // ( ) ---> this is just like  caliing  a functn with name eg -- > one();
//⬆️ UPAR SEMICOLON MUST H NI TOH AGAR SAME AISA FUNCTION LIKHENEGE TOH ERROR DEGA KUKI USKO PATA N REHTA H OR CHLT AREHTA H 

// syntax (1)(2) 1 - is for function defination and 2 - for its execution

// IIFE DEFINATION ---> JO FUNCTION IMMEDIATELY EXECUTE HOJAYE SATH K SATH 
////////////////// ---> GLOBAL SCOPE K POLLUTION S PROBLEM HOTA H ,,, USS POLLUTION KO HATANE K LIYE HUM IIFE KA USE KRTE H 

///++++++++++++ LETS PERFORM THE SAME IN ARROW FUNCTION ++++++++++++++++++++++++
 
(()=>{
    console.log(`DB CONNECTED`)  // simple iife 🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨
}) () ; // yahan n lagaya tha semicoln toh upar wala run hua ek error k sath 


// LETS SEE KI HUMKO AGAR KISI NAME USE KRTE HUE VALUE PASS KRA K MSG PRINT KRANI H TOH NAME KESE LENGE🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨

((name)=>{
    console.log(`DB CONNECTED ${name}`)
}) ('Sneha') ; // yahan value pass krte hue execute kiya


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨

// interview point of view
// DO IIIFE EK SATH LIKHENGE TOH SEMICOLON FIRST WALE K END M LAGANA H FOR REFERENCE SEE LINE NO 13....