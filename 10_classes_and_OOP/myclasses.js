// ES 6 version k  baad s ye class ka concept h

class User{
    constructor(username,email,password){      // jese hi new k through ek object banega constructor call hojyga
        this.username = username
        this.email = email
        this.password = password
    }
    encyrptPassword(){
        return `${this.password}abc`
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const user1 = new User("Aman",'aman@123.com',12345)
console.log(user1.encyrptPassword());
console.log(user1.changeUserName());


/////////// ab yehi chiz agar bina class k function s kese krte //////////////////////////////////////////

function Userr(username,email,password){
    this.username = username
    this.email = email
    this.password = password
}
Userr.prototype.encyrptPassword = function(){
    return `${this.password}abc`
}
Userr.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
  
}
const user2 = new Userr("sneha",'sneha@123.com',123)
console.log(user2.encyrptPassword());
console.log(user2.changeUserName());