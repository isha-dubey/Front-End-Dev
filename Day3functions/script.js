// const para = document.createElement("p");
// para.textContent = "this is created using an API";

// para.setAttribute("color", "red")
// console.log(para.getAttribute("color"))

// const span = document.createElement("span");
// span.id = "span-id"
// span.className = "blue"
// //span.textContent = "this span tag is created by dom"
// span.innerHTML = "this span tag is <em>created by dom</em>"  //we can create another child element using inner html property

// para.appendChild(span);

// document.body.appendChild(para);

// const hobbies = ["dance", "swimming", "eating"]
// // create the unordered list of above array
// const list = document.createElement("ul")


// for (let hobby of hobbies) {
//     list.innerHTML += "<li>" + hobby + "</li>";
// }

// document.body.appendChild(list);

// // get elements




// const dynamicContent = document.getElementById("dynamic-text");
// console.log(dynamicContent)
// const phrases = ["Software Engineer...", "Dancer...", "Gym Rat..."]

// let letterIndex = 0;
// let phraseIndex = 0;

// function printLetters(phrase){
//     if (letterIndex < phrase.length){
//         dynamicContent.textContent += phrase.charAt(letterIndex);
//         letterIndex += 1;
//         setTimeout(function(){
//             printLetters(phrase)}, 100)
//     }
//     else if(letterIndex== phrase.length){
//         clearletters()
//     }
// }
// function clearletters(){
//  if(letterIndex > -1)
//  { 
//     let updatedPhrase= "" ;
    
//     for (let index = 0; index < letterIndex; index++) {
//         updatedPhrase += phrases[phraseIndex].charAt(index);
//       }
//     dynamicContent.textContent = updatedPhrase;
//     letterIndex -= 1;
//     setTimeout (clearletters , 100);
//     }
//   else if (letterIndex == -1)
//   { phraseIndex= (phraseIndex +1) % phrases.length;
//     letterIndex = 0;
//     printLetters(phrases[phraseIndex])
// }  

// }
// printLetters(phrases[phraseIndex])


Isha