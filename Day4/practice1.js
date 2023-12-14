document.addEventListener("DOMContentLoaded", function(){

document.getElementById("Start").addEventListener("click", function handleClick(){

    alert("you have clicked the button")
})

document.addEventListener("keypress" , (e) => {
    console.log(e.key)
    if (e.key == 2)
         e.preventDefault();
})


})