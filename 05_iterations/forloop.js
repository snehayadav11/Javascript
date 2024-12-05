
/////////////////////////////// FOR LOOP ///////////////////////////////////////////////////////

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
    
    
// } ///////// yahan p jese i bohot bar repeat hora h toh usko selct krek control + d dbaygi or mitygi toh sb ek sath remove hoke new ajyga whichi is intresting
// console.log(element); // simple si baat h yahan accces n kar payenge kuki scope s bahar h 

 /////////////////////////////////// lets see ki kon sa pehle run hoga code if kafi sara h nested toh


 for (let i = 0; i < 10; i++) {
         const element = i;
         if(element == 5){
           // console.log(` ${element} , is the best Number`);  // let see ye pehle run hota h ya 
        }
         //console.log(element); /// ya fr ye obvious si baat h upar wala pele run hoga
        
        
     }


     //////////////////////////////////////////////// LET SEE ARRAY AND FOR LOOP ///////////////////////////////////

    const myArray = ["Maths" , "English" , "Science" , "Hindi"]
    console.log(myArray.length);
     for (let index = 0; index < myArray.length; index++) { //  < index.length hi rkhna h kuki  <= m array s bahar chla jyga flow or undefined ayga which is not good
        const element = myArray[index];             // java scriot m outof bound exception nahi h still undefined is not adviceable so better use less than array.length
        console.log(element);
     }

     /////////////////////////////////////////////// TWOOOO IMPORTANT PART OF LOOOPS ARE BREAK AND CONTINUE WHICH IS CRYSTAL CLEAR SO LETS MOVE TO WHILE LOOP 