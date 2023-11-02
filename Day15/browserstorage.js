// document.addEventListener("DOMContentLoaded" , () => {
//     document.getElementById("save").addEventListener("click" , () => {
//         const name = document.getElementById("name").value
//         console.log(name);
//     })
// })

// suppose we have to show this name by default when the page is refreshed . types of storage option

// 1. session storage
// call this function on the window object
//(session represents to a particular duration for which a tab is particularly associated with in a domain)
// tab close kr denge toh session khtm , its a lifetime of session storage


document.addEventListener("DOMContentLoaded" , () => {
    document.getElementById("name").value = sessionStorage.setItem("name") ?? ""
    document.getElementById("save").addEventListener("click" , () => {
        const name = document.getElementById("name").value
        sessionStorage.setItem("name" , name)
        console.log(name);
    })
})


//2. local storage
// abh agar we want a permanent storage toh we use local storage

document.addEventListener("DOMContentLoaded" , () => {
    document.getElementById("name").value = localStorage.setItem("name") ?? ""
    document.getElementById("save").addEventListener("click" , () => {
        const name = document.getElementById("name").value
        localStorage.setItem("name" , name)
        console.log(name);
    })
})


// we can also use localStorage.clear() to clear the cache.
// ese we have .remov eitem("pass the name of the key")