document.addEventListener("DOMContentLoaded", () => {

    const themePrefersDark = window.matchMedia("(prefers-color-scheme : dark)")

    const getOSPreference = () => {
        themePrefersDark.matches ? "dark" : "light" 
    }

    const getThemePrefFromLocalStorage = () => {
        return localStorage.getItem("theme")
    }

    const checkThemePreference = () => {
        const defaultTheme = getOSPreference()
        const currentTheme = getThemePrefFromLocalStorage()
        if (currentTheme == "dark") {
            document.body.classList.toggle("darktheme")
        }
        else (currentTheme == "light")
        {
            document.body.classList.toggle("lighttheme")       
        } setButtonText(currentTheme ?? defaultTheme )
    }
    const setButtonText = (theme) => {
        switchButton.textContent = theme === "dark" ? "Light" : "Dark" ;

    }

    
    const switchTheme = () => {
        let theme
        if(themePrefersDark.matches){
            document.body.classList.toggle("lighttheme");
            theme = document.body.classList.contains("lighttheme")? "light" : "dark"
        }
        else {
            document.body.classList.toggle("darktheme")
            theme = document.body.classList.contains("darktheme")? "dark" : "light"
            
        } localStorage.setItem("theme" , theme)
        setButtonText(theme)
    }
    
    const switchButton = document.getElementById("Switch-theme")
    switchButton.addEventListener("click" , switchTheme)
    checkThemePreference()
})