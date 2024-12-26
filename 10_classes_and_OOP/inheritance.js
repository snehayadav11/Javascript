class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`usename is :${this.username}`);
        
    }
}
class Teacher extends User {
    constructor(username,email,password){        // yahan p humko .call use krna pdta this lagana padta lekin extend kar rahe h toh super keywornd s kr lenge
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course is added by ${this.username}`);
        
    }
}
const user = new Teacher("Aman",'aman@123.com',1234)
user.addCourse();

const user1 = new User("Sneha")
//user1.addCourse();    // output --> user1.addCourse is not a function kuki user parent class jo h vo child class ka kese excess kar skta h

user1.logMe(); // usename is :Sneha

console.log(user === user1); // false
console.log(user === Teacher); // false equal ni h just copy h uska

console.log(user instanceof Teacher); // true



