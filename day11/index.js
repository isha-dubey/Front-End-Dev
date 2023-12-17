document.addEventListener("DOMContentLoaded" , () => {

// destructuring

// let person = {FirstN : "mohit" , LastN : "thakur" , Place : {City : "Jharkhand" , State : "UP"}}
// console.log(person);
// let {FirstN} = person
// console.log(FirstN);
// let {Place : {City}} = person
// console.log(City);

// Closure

// let sum = () => {
//     let a = 5
//     let b = 6 
//     let result = () => {
//         return a + b}
//        return result()
// }


// console.log(sum())

// methods used in objects to define the position of this
// call bind and apply decides the position of this


// let person = {FirstN : "mohit" , LastN : "thakur" ,
// getname : function(){
//     console.log(`My name is ${this.FirstN} ${this.LastN}`)
// }}

// let {getname} = person
// let persondetails = getname.bind(person)
// persondetails()

// these methods don't work this arrow functions kyuki
// uska scope is global but regular function se this ko point kr skte hai
// toh point krne ke liye we use regular func

// function greetPerson(greeting) {
//     console.log(`${greeting} ${this.name}`);
// }

// let person1 = {name : "Mohit"}
// let person2 = {name : "Isha"}

// greetPerson.call(person1 , "hello")


// similary we have apply function for ultiple params


// function greetPerson(greeting , adressing) {
//     console.log(`${greeting} ${adressing} ${this.name}`);
// }

// let person1 = {name : "Mohit"}
// let person2 = {name : "Isha"}

// greetPerson.call(person1 , "hello" , "Mr.")
// greetPerson.call(person2 , "hie" , "Ms.")

// ise do use cases hai function borrowing and funtions currying

// let person = {FirstN : "mohit" , LastN : "thakur" ,
//  getname : function(){
//      return (`My name is ${this.FirstN} ${this.LastN}`)
//  }}
// let doctor = {FirstN : 'john' , LastN : "doe"}

// console.log(person.getname.call(doctor))


//function currying --> fixing the value of params

// function Logdata(Date , data){
//     console.log(Date , data )
// }
// Logdata(new Date , "hello")
// let lognow = Logdata.bind("null" , new Date())

// lognow("hiiiiiiii")


// ways of creating objects 

// Class method for object creation

// class Shape{
//     constructor(height , width)
//     {
//         this.height = height
//         this.width = width
//     }}
//     let square = new Shape(10,20)
//     console.log(square);


// let anotherp = new Object
// anotherp.firstname = "isha"
// anotherp.surname = "dubey"
// console.log(anotherp);

// function Person(){
//     this.FirstN = "mohit"
//     this.LastN = "thakur"
// }
// let jane = new Person
// console.log(jane)


//callbackfunction --> function passed as an argument

// function person(callback)
// {
//     setTimeout(function(){
//         console.log("hey after 2 sec");
//     } , 2000)
//     callback()
// }

// person(function(){
//     console.log("hey with call back")
// })

//prototypical inheritance


//  function Person(F ,L){
//      this.FirstN = F
//      this.LastN = L
//  }
//  let jane = new Person("isha" , "dubey")
//  console.log(jane)

// Person.prototype.printN = function(){
//     return this.FirstN + this.LastN
// }
// console.log(jane.printN()); 

// filter method of array 

// object.create() method 
// it uses object as a parameter and uses that to create an 
// object 

// let org = { name: 'devsnest'}
// console.log(Object.create(org , {name : {value : 'foo'}}));

// console.log(Object.hasOwn(org , "namje"))



// Object.assign() --> doesnt unclue property of parent item

// let target = { A : 1 , B : 2}
// let S1 = { B : 1 , C : 2}
// let S2 = { C : 1 , D : 2}
// console.log(Object.assign(target , S1 , S2 ));



})