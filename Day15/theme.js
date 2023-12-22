



document.addEventListener("DOMContentLoaded", () => {

    const switchButton = document.getElementById("Switch-theme")
    
    const themePrefersDark = window.matchMedia("(prefers-color-scheme : dark)") 
  
    

    const switchTheme = () => {
        if(themePrefersDark.matches){
            document.body.classList.toggle("lighttheme");
            //   const theme = 
        }
        else {
            document.body.classList.toggle("darktheme")
            
        }
        switchButton.textContent = themePrefersDark.matches ? "Light" : "Dark" ;
     }
    
    switchButton.addEventListener("click" , switchTheme)

})