function User(email,password){
    this._email = email;
    this._password = password

    // get st k jagah define property tha pehle jb class nahi tha

    Object.defineProperty(this,'email',{
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this,'password',{
        get: function(){
        return this._password.toUpperCase();
       },
        set: function(value){
        this._password = value;
       }
})
}

const sneha = new User('sy@123.com','abc')

console.log(sneha.email);
console.log(sneha.password);