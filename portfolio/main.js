
const dynamicContent = document.getElementById("dynamic-text");
console.log(dynamicContent)

const phrases = ["Software Engineer...", "Dancer...", "Gym Rat..."]

let letterIndex = 0;
let phraseIndex = 0;

function printLetters(phrase){
    if (letterIndex < phrase.length){
        dynamicContent.textContent += phrase.charAt(letterIndex);
        letterIndex += 1;
        setTimeout(function(){
            printLetters(phrase)}, 100)
    }
    else if(letterIndex == phrase.length){
        clearletters() ;
    }
}
function clearletters() {
 if(letterIndex > -1)
 { 
    let updatedPhrase = "" ;
    
    for (let index = 0; index < letterIndex; index++) {
        updatedPhrase += phrases[phraseIndex].charAt(index);
      }
    dynamicContent.textContent = updatedPhrase;
    letterIndex -= 1;
    setTimeout(clearletters , 100);
    }
  else if (letterIndex == -1)
  { phraseIndex= (phraseIndex + 1) % phrases.length;
    letterIndex = 0;
    printLetters(phrases[phraseIndex])
}  

}
printLetters(phrases[phraseIndex])

document.getElementById("menu-button").addEventListener("click" , showMenu)
document.getElementById("close-menu").addEventListener("click" , closeMenu)
function showMenu(){
  const menu = document.querySelector("section.menu")
  menu.style.width = "100%" ;
}

function closeMenu (){
  const menu = document.querySelector("section.menu")
  menu.style.width = "0%" ;
}

function addClickToMenu(){
  const menuItems = document.querySelectorAll("section.menu ul > li")
  for (let menuItem of menuItems){
  menuItem.addEventListener("click", closeMenu);
}
}

addClickToMenu()