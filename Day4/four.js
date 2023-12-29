


// document.getElementById("button").onclick = handleClick  <-- way of adding event listener
// another way is shown below

// document.getElementById("button").addEventListener("click", function handleClick()
// {
//     alert("Absoulutly Fucking Yes")
// })


// ##### how add and remove eventlistener (mouseover)
// function handleMouseOver(e){
//     console.log(e)
// }

// document.getElementById("button").addEventListener("click", function handleclick(){

//     document.addEventListener("mouseover", handleMouseOver)
// })

// document.getElementById("stop").addEventListener("click", function handleclick(){

//     document.addEventListener("mouseover", handleMouseOver)
// })

// document.addEventListener("keyup", function(e){
//     console.log(e)
//     console.log(e.key)
//     if (e.key == 2){
//     e.preventDefault(); }
// })

// document.addEventListener("keypress", function(e){
//     console.log(e)
//     console.log(e.key)
//     if (e.key == 2)
//     e.preventDefault();
// })
// document.addEventListener("keydown", function(e){
//     console.log(e)
//     console.log(e.key)
//     if (e.key == 2)
//     e.preventDefault();
// })

// document.getElementById("isha").addEventListener("focus", function(){
//     console.log("focus event happened")
// })

// document.getElementById("isha").addEventListener("blur", function(){
//     console.log("blur event happened")
// })
document.querySelector("form").addEventListener("submit", function(event){
    event.preventDefault();
    console.log(event.target);
})


