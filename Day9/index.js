// Suppose we take this example in JS 
// the output will Be
// 2
// 2

// var a = 2

//  function printME(){
//  console.log(a)
//  }
//  printME()
// console.log(a)

// but if we change the placing of the variable



//  function printME(){
//      var a = 2
//      console.log(a)
//  }
// printME()
//  console.log(a)

// the output will be
// 2
// error



// because in JS we can't access the placing of 
// variables it is very important , the placing.
//  the lexical environment of VAR A in both the example is different


// Execution Context
// When the JavaScript engine scans a script file, it makes an environment
//  called the Execution Context that handles the entire transformation 
//  and execution of the code.

// During the context runtime, the parser parses the source code 
// and allocates memory for the variables and functions. The
//  source code is generated and gets executed.

// There are two types of execution contexts: global and function.
//  The global execution context is created when a JavaScript
//   script first starts to run, and it represents the global scope 
//   in JavaScript. A function execution context is created whenever 
//   a function is called, representing the function's local scope.

// abh teen object hote hai in the execution context
// -window (represents the entire browser)
// -this ( is also a global variable)
// -this.anyfunction (this.printME)
// -this.anyvariable


//with "this" we can have reference to outer environmt


//hoisting

// console.log(somevariable)
// SomeFunction() ;

// function SomeFunction(){

//     console.log("from somefunction" , somevariable)
// }

// var somevariable= "desnest"
// console.log(somevariable)


// execution cotext
var my = "isha"
function printName(){

    
    console.log(my)
   printSomeOtherName()
}

function printSomeOtherName() {
    var my = " Jane" // if we remove this then it will print isha cause its the global variable
    console.log(my)

}
console.log(my)
printName()


