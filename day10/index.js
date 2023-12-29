// message = "hello isha"

// function hello1(){
//    let message = "hello mohit"

//  { let  message = "good noon"
//     console.log("good morning" + message) }
 
//     let c = function hello2() //yeh function to  return hora sath me uska lexical environment bhi return horae
//     {
//         console.log("i am cute" + message)
//     }
//     return c 
// }

// c = hello1()
// c()

// normally hume return value mil jatie but yaha return value is a function
//  

 

// function hello1(){
//   let message = "hello mohit"
//     let c = function hello2() 
//     {
//         console.log("i am cute" + message)
//     }
//     message = " ~ isha" 
//     return c 

// }

// c = hello1()
// c()

//abh yaha toh apan ne message change krdia toh kya print hona chahiye
// you will say "hello mohit" but nahi , "hello isha" print hoga kyuki 
// kyuki vo value print nahi krta hai reference variable ko msg krtae.RTCDataChannelEventreference is messagenot uski value

// ek function banaya usme function ke andar ke andar ke nadar aur functions function .
// aur phir main function ko return krke call kiya toh kya saare functions ka closure ke andar closure ilega answer is yes

//callbacks

// function CallmeOncedone(callback) {
//     console.log("i am done")
//     callback()
// }
// function printText() {

// console.log("hello")
// }
// CallmeOncedone(printText)

// Objects

// let person = {
//     first_name : "isha" ,
//     last_name : "dubey" ,
//     get_name : function(){
//         console.log(this)
//         return this.first_name + ' ' + this.last_name
//     }
// }

// console.log(person.get_name());

// Call

// let name1 = {
//     firstname : "isha" ,
//     Lastname : "dubey"
// }

// let printFullName = function() {
//     console.log(this.firstname + ' ' + this.Lastname)
// }
// let name2 = {
//     firstname : "mohit" ,
//     Lastname : "thakur"
// }

//call funtion se apan this is value ko use kr skete hai 
//by giving the function as a referance in first parameter
// in simple terms what we want "this" to be pointing to



// isme function borrowing hota hai
//   printFullName.call(name2)    // passing name2 as reference in first parameter toh abh vo printfullname function borror krlega



// if we want to more parameters then
//   let name1 = {
//     firstname : "isha" ,
//     Lastname : "dubey"
// }

// let printFullName = function(hometown , state) {
//     console.log(this.firstname + ' ' + this.Lastname + "from" + hometown)
// }
// let name2 = {
//     firstname : "mohit" ,
//     Lastname : "thakur"
// }

//printFullName.call(name2 , "mumbai" , "maharastra")
//first argument toh reference function hi rahega second wala can be other params

//in apply function first argument will be reference function uske baad ke params will be in a list

//printFullName.apply(name2 , ["mumbai" , "maharastra"])

// bind method
//let printMyName = printFullName.bind(name2 , "mumbai" , "maharastra")
//console.log(printMyName);
//printMyName();

// bind method creats a copy a function which can be invokes later


//function currying

// function logData (date , data) {
//   console.log(date,data)
    
// }
//  let lognow = logData.bind(null , new Date())
// lognow("this is another info to be logged")
// lognow("some other idea")

// function borrowing
// const person1 = {
//     firstName: 'John',
//     lastName: 'Doe',
//     fullName: function() {
//       return this.firstName + ' ' + this.lastName;
//     }
//   };
  
//   const person2 = {
//     firstName: 'Jane',
//     lastName: 'Doe'
//   };
  
//   // Borrowing the fullName method from person1 and applying it to person2
//   const borrowedFunction = person1.fullName.bind(person2);
//   console.log(borrowedFunction()); // Outputs: Jane Doe
  