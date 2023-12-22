//  console.log("first");
//  console.log("second")
//  console.log("third");

// so basically if we run this code it will first log the statements of longRunninFn and then
// it will execute the event queue 

// const longRunninFn = () => {
//     console.log("longRunninfn started");
//     const duration = Date.now() + 3000
//     while(Date.now() <=duration){
        
//     }
//     console.log("longRunninfn ended");
// }

// const handleClick = () => {
//     console.log("button clicked");
// }

// document.addEventListener("DOMContentLoaded" , ()=> {
//     document.getElementById("clickable").addEventListener("click" , handleClick)
//     longRunninFn()
// })


// const longRunninFn = () => {
//     console.log("longRunninfn started");
//     const duration = Date.now() + 3000
//     while(Date.now() <=duration){
        
//     }
//     console.log("longRunninfn ended");
// }

// const anotherFn = () => {
//     console.log("another fun Loaded");
//     longRunninFn()
// }

// const someFunction = () => {
//     anotherFn()
// }

// const handleClick = () => {
//     console.log("button clicked");
// }

// const FuncWithtimeout = () => {
//     setTimeout(() => { 
//         console.log("hi I am the first");
        
//     }, 2000);
// }

// document.addEventListener("DOMContentLoaded" , ()=> {
//     document.getElementById("clickable").addEventListener("click" , handleClick)
//     FuncWithtimeout()
//     someFunction()
// })


//moving to browser storage


// const person = localStorage.setItem('Name' , 'isha')
// const person2 = localStorage.setItem('Name1' , 'mohit')


// console.log(localStorage.getItem('Name'))
// sessionStorage.clear():

// // Storing data in localStorage
// localStorage.setItem('username', 'JohnDoe');
// localStorage.setItem('isLoggedIn', 'true');

// // Retrieving data from localStorage
// const username = localStorage.getItem('username');
// const isLoggedIn = localStorage.getItem('isLoggedIn');

// console.log(username); // Output: JohnDoe
// console.log(isLoggedIn); // Output: true

// // Removing a specific item from localStorage
// localStorage.removeItem('username');

// // Clearing all items from localStorage
// localStorage.clear();



