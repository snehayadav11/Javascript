// properties ko  props bhi bolte h will see in react

class User{
 constructor(username){
    this.username = username
 }

 logMe(){
    console.log(`Username is :${this.username}`);
    
}
 /// now i want ki jese hi ek user bane usko ek unique id mil jaye

static createId(){
    return `123`
}// TypeError: aneha.createId is not a function stactic lagane k baad 
// abb kayi bari hum iska access har uss object ko nahi dna chahte h jo iss class s instantiate hua h

}

const aneha = new User("Aman")
//console.log(aneha.createId());

class Teacher extends User{
    constructor(username,email){
        super(username)
      this.email = email
    }
}

const amana = new Teacher ('Anu','anu@123.com')
//amana.logMe()
amana.createId();//TypeError: amana.createId is not a function kuki stactic laga hua h toh vo n access krne degaa