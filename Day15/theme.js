
const switchTheme = () => {
    if(themePrefersDark.matches){
        document.body.classList.toggle("lighttheme")
    }
    else {
        document.body.classList.toggle("darktheme")

    }
    

}


document.addEventListener("DOMContentLoaded", () => {
    const switchButton = document.getElementById("Switch-theme")
    switchButton.addEventListener("click" , switchTheme)


    const themePrefersDark = window.matchMedia("prefers-color-scheme : dark")
})