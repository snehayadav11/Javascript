// yeh toh normal class kese hota h vo example h fr niche uske getter ka eg h
// 
// class user {
//     constructor(email,password){
//     this.email = email ;
//     this.password = password;
//     }
// }

// const sneha = new user('sy@123.com','123')
// console.log(sneha);


// abb kya hota h na mann lo ab humko password ko encyrpt form m display krna h ya toh fr password ka acces hi nahi dena h toh 
// uss case m humm getter or setter ko use me lete h 
/*
 class user {
     constructor(email,password){
    this.email = email ;
    this.password = password;
 }
    get password(){
        return this.password.toUpperCase();// aise hum exact password nahi display kar rahe h user ko
    }//TypeError: Cannot set property password of #<user> which has only a getter

    // sirf get nahi laga skte humko set b lagana hota h toh upar wale error k anne k bad ab hum seter b lagayenge
    // tbabi jo value get krenge uski value set hogi set password s

    set password(value){
      this.password = value
    }
}
// isko krte time jo error aaya vo tha ka ki maximmum caall stack size exceeded or vo isliye aAAya kuki ye jjo hamara constructor h    
// vo bhi value se krr raha h or seter b toh iske karan dono m race hojata h m krunga m krunagatoh stack wala error aaata h
// or evenutually set toh set or get hi kar rahe h roh hum bvaha variaablle ka nam chanage kar denge

/**
 * 
 * Maximum call stack size exceeded
    at set password [as password] (/workspaces/Javascript/10_classes_and_OOP/getter_setter.js:30:21)
    at set password [as password] (/workspaces/Javascript/10_classes_and_OOP/getter_setter.js:30:21)
    yeh error h or iss bari set password m error aaya h or voi tu variable ka nam sirf set m change  kregi toh fr 
    error get me aane lagega
 * 
 */
    

    // now the final code

class user {
    constructor(email,password){
        this.email = email ;
        this.password = password;
    
    }

    get password(){
       // return this._password.toUpperCase()
       //iss example s exactly smj ayga ki kya h getter setter
       return `${this._password}Sneha`//abcSneha
    }

    set password(value){
        
       // this._password = value.toUpperCase()
        this._password = value // yeh jo h og password ko save krke rakhta h
    }

    // vese hi email k liye le lete h 

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        // return this._email = value setter m kabhi bhi return nahi krte 
        this._email = value
    }
 // getter setter k sath jo property name likhte h vo same as constructor property rehta h
}

const sneha = new user('sy@123.com','abc')
console.log(sneha.password);
console.log(sneha.email);


