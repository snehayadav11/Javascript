const user ={
    _email: "sy@123.com",
    _password: "abc",

// es 2022 m yeh private properties k liye underscore k jagah # b use kreskte h
    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const obj = Object.create(user) // yeh hota h factory function ab hum user ka ref obj ko diye h toh ab obj. use kar skte h
console.log(obj.email);// yahan undersore email nahi likhenge toh bhi ajyga kuki usko underscore s private hone s mtlb ni h usko bas elk propert h enail ussse matlab h
