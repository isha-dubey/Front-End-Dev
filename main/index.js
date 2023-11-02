document.addEventListener("DOMContentLoaded", function(){

    document.querySelector("form").addEventListener("submit" , function(event){
       
event.preventDefault()
        console.log(event )
       console.log(event.target) 
       console.log(event.target.username.value) 
    }) //when submission happens then the page is refreashed automatically toh use e.prevent default
})