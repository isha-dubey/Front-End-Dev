



document.addEventListener("DOMContentLoaded", () => {

    const switchButton = document.getElementById("Switch-theme")
    
    let themePrefersDark = window.matchMedia("prefers-color-scheme : dark") 
  
    

    const switchTheme = () => {
        if(themePrefersDark.matches){
            document.body.classList.toggle("lighttheme")
        }
        else {
            document.body.classList.toggle("darktheme")
    
        } }
    
    switchButton.addEventListener("click" , switchTheme)
    switchButton.textContent = themePrefersDark ? "Light" : "Dark" ;

})