/*
A Promise is an Object that links Producing code and Consuming code
PRODUCING CODE: "Producing code" is code that can take some time
CONSUMING CODE: "Consuming code" is code that must wait for the result
*/

// resolve h is directly connected to then h and can also have certain parameters toh jo bhi passs krenge resolve m vo directly access lkar sakte h through .then()

const promise1 = new Promise(function(resovle,reject){
    //promise do an async task  such as 
    // db calls , cyrptography , network , file reading
    setTimeout(function(){
        console.log('Aync task 1');
        // resovle()    jb hum resolve ko comment kar dere h toh .then wala part execute nahi horah reason resolve directly connected to .then()
    },1000)
})

promise1.then(function(){
    console.log("Promise consumed");
    
})


//////////////////////////  ALTERNATE WAY OF WRITNIG   //////////////////////////////////////////////////

new Promise(function(resovle,reject){
    setTimeout(function(){
        console.log('Aync task 2 ');
        resovle()     
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})




///////////////////////////////////////// RESOLVE M PARAMETERS PASSS KRKE EXAMPLE LENGE  ///////////////////////////////////

const promise3 = new Promise(function(resovle,reject){
    setTimeout(function(){
        resovle({username: "Sneha" , email: "sneha@123.com"})     
    },1000)
})

promise3.then(function(user){
    console.log(user);
    
})



/*
 LEARN REJECT USE 
KUKI RESOLVE KA DIRECT CONNECTION H .THEN  K SATH TOH HUM PROMISE CONSUME KRNE K TIME . THEN () LAGA K RESOLVE KI VALUE LENGE 
 OR. CATCH ()S REJEC T HANDLE KRENGE 
*/

const promise4 = new Promise(function(resovle,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resovle({username: "Sneha" , email: "sneha@123.com" , password: "123"})
        }else{
            reject('ERROR : Something went wrong')
        }
    },1000)
})
// promise4.then().catch()
// promise4.then((user) => {
//     console.log(user);
//     return user.username // yahan p ji hum user ka sirf username retun kara rahe h vo iske pass nahi jayega can also take variable 
//     // and store kra k prink karalo vo n jyga toh usko access krne k liye h .thening use krte h mtlb chainnig jo upar wala retun kr raha h vo second then m jyga and then agge print ya jo b operation h hoga
// }).then((user) => {
//     console.log(user);
// })   // yahn tak bas likhe toh erroe aya unhandled promise rejection toh ab cathch ka likhenge
// .catch(function(error){
// console.log(error)

// })
 

////////////////////////// ek or hota h vo hota h finally jo kii hmehsa hi run hoga chahe promise fullfill hua h ya reject ya peneding

promise4
.then((user) => {
    console.log(user);
    return user.username 
})
.then((user) => {
    console.log(user);
})   
.catch(function(error){
console.log(error)
})
.finally(() => {
    console.log("The promise is either resolved or rejected")
    
})








///////////////////////////////////  ASYNC AND AWAIT ///////////////////////////////////////////////////

// ASYNC --->  async makes a function return a Promise
// AWAIT ---> await makes a function wait for a Promise

const promise5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "Aman" , email: "aman@123.com" , password: "1234"})
        }else{
            reject('ERROR : JS went wrong')
        }
    },1000)
})

async function consumePromise5 () {
    try{
        const response = await promise5
        console.log(response);
        
    } catch (error) {
        console.log(error)
    }
}

consumePromise5()


// async function getAllUsers () {
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         //console.log(response);
//         //const data =   response.json()  yeh bas kiye the toh output ni ayya kuki usko jspn m convert krne m time lag raha toh await lagaye
//          const data =  await response.json()
//          console.log(data);
        
//     } catch (error) {
//         console.log("E: ", error)
//     }
// }

// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => {
    console.log(error);
    
})

// ye jo h uska output h isme dekh skte h ki pehle fetch ka output aaya even async wala chize pehle likha h
// lekin fetch isliye pehle execute hua kuki fetch high priority queue h agar vo h toh vo hi 1st execute hoga

/* 
{
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: [Object]
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets'
    }
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: [Object]
    },
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains'
    }
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    address: {
      street: 'Douglas Extension',
      suite: 'Suite 847',
      city: 'McKenziehaven',
      zipcode: '59590-4157',
      geo: [Object]
    },
    phone: '1-463-123-4447',
    website: 'ramiro.info',
    company: {
      name: 'Romaguera-Jacobson',
      catchPhrase: 'Face to face bifurcated interface',
      bs: 'e-enable strategic applications'
    }
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    address: {
      street: 'Hoeger Mall',
      suite: 'Apt. 692',
      city: 'South Elvis',
      zipcode: '53919-4257',
      geo: [Object]
    },
    phone: '493-170-9623 x156',
    website: 'kale.biz',
    company: {
      name: 'Robel-Corkery',
      catchPhrase: 'Multi-tiered zero tolerance productivity',
      bs: 'transition cutting-edge web services'
    }
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    address: {
      street: 'Skiles Walks',
      suite: 'Suite 351',
      city: 'Roscoeview',
      zipcode: '33263',
      geo: [Object]
    },
    phone: '(254)954-1289',
    website: 'demarco.info',
    company: {
      name: 'Keebler LLC',
      catchPhrase: 'User-centric fault-tolerant solution',
      bs: 'revolutionize end-to-end systems'
    }
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    address: {
      street: 'Norberto Crossing',
      suite: 'Apt. 950',
      city: 'South Christy',
      zipcode: '23505-1337',
      geo: [Object]
    },
    phone: '1-477-935-8478 x6430',
    website: 'ola.org',
    company: {
      name: 'Considine-Lockman',
      catchPhrase: 'Synchronised bottom-line interface',
      bs: 'e-enable innovative applications'
    }
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    address: {
      street: 'Rex Trail',
      suite: 'Suite 280',
      city: 'Howemouth',
      zipcode: '58804-1099',
      geo: [Object]
    },
    phone: '210.067.6132',
    website: 'elvis.io',
    company: {
      name: 'Johns Group',
      catchPhrase: 'Configurable multimedia task-force',
      bs: 'generate enterprise e-tailers'
    }
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    address: {
      street: 'Ellsworth Summit',
      suite: 'Suite 729',
      city: 'Aliyaview',
      zipcode: '45169',
      geo: [Object]
    },
    phone: '586.493.6943 x140',
    website: 'jacynthe.com',
    company: {
      name: 'Abernathy Group',
      catchPhrase: 'Implemented secondary concept',
      bs: 'e-enable extensible e-tailers'
    }
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    address: {
      street: 'Dayna Park',
      suite: 'Suite 449',
      city: 'Bartholomebury',
      zipcode: '76495-3109',
      geo: [Object]
    },
    phone: '(775)976-6794 x41206',
    website: 'conrad.com',
    company: {
      name: 'Yost and Sons',
      catchPhrase: 'Switchable contextually-based project',
      bs: 'aggregate real-time technologies'
    }
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    address: {
      street: 'Kattie Turnpike',
      suite: 'Suite 198',
      city: 'Lebsackbury',
      zipcode: '31428-2261',
      geo: [Object]
    },
    phone: '024-648-3804',
    website: 'ambrose.net',
    company: {
      name: 'Hoeger LLC',
      catchPhrase: 'Centralized empowering task-force',
      bs: 'target end-to-end models'
    }
  }
]
Aync task 1
Aync task 2 
Async 2 resolved
{ username: 'Sneha', email: 'sneha@123.com' }
{ username: 'Sneha', email: 'sneha@123.com', password: '123' }
Sneha
The promise is either resolved or rejected
{ username: 'Aman', email: 'aman@123.com', password: '1234' }
o@snehayadav11 ➜ /workspaces/Javascript (main) $
*/