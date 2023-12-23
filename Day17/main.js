let publicprops = (function () {

    let publicVariable = 10
    let privateVariable = 20
    return {
        value : publicVariable
    }
})()

console.log(publicprops)