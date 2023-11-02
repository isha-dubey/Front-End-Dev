document.addEventListener("DOMContentLoaded" , function(){

    document.querySelector("submit").addEventListener("submit" , function(event) {
        event.preventDefault()
        const form = event.target
       console.log(form.username.value)
       console.log(form.email.value)

       document.getElementById("email").addEventListener("input", function(){
     
       })
       console.log(form.value)
    })

})