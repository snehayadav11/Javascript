/* function setUser(username){
    // complex db calls 
    this.username = username
}

function createUser(username , email , password){
 
    setUser(username)

    this.email = email           
    this.password = password
}

const user = new createUser("Sneha", 'sneha@123.com' , 12345)
console.log(user); 



OUTPUT ----> createUser { email: 'sneha@123.com', password: 12345 } 
username yahan p print nnahi hua kuki jb function k andar function call hota h tohh us time vss function m uske paarent function ko refer nahi kar pata h jese 
iss case m set user nahi kar pa raha h toh uske liye this global ho jata h

iska js copy m ache s diagram h ache s smjna
*/



// TOH NICHE WALA HUM ACHE S USE KRENGE CALL KA FR IMPOTANCE SMJ AYGAAA 



function setUser(username){
    // complex db calls 
    this.username = username
}

function createUser(username , email , password){
 
    setUser.call(this,username)

    this.email = email           
    this.password = password
}

const user = new createUser("Sneha", 'sneha@123.com' , 12345)
console.log(user);

