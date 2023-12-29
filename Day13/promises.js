// example of promises----------------

// let  myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const success = true
//         if (success){
//             resolve("yay!!!!!!!!!")
//         }
//         else {
//             reject("nooooooooo")
//         }
//     }, 4000);
// })

//myPromise.then((result) => {console.log(result)})


// let MoneyLended = 10_000
// let promise = new Promise((resolve,reject)=> {
//     setTimeout(() => {
//         if (MoneyLended == 10_000){
//         resolve(console.log("yay! got my money back"))}
//         else {
//             reject("oh no!!!")
//         }
//     }, 2000);
// })

// promise.then(result => {console.log("just  great news");})




// let MoneyLended = 10_000
// let promise = async ()=> {
//      setTimeout(() => {
//         if (MoneyLended == 10_000){
//         (console.log("yay! got my money back"))}
//         else {
//             console.log("oh no!!!")
//         }
//     }, 2000);
// }

// const result = await promise()
// console.log(result);

//SETTTTTTTTTTTTTT------------------------
//n JavaScript, a Set is a built-in object that allows you to store 
//unique values of any type, whether primitive values or object references.
// Sets have methods for adding, deleting, and checking the presence of elements.

// let set = new Set([1,45,'this',false,{a:4 , b:5}])
// console.log(set);

// console.log(set);
// set.add('that')
// set.delete(45)
// console.log(set.size);

// // for(let items of set){
    // //     let set2 = []

    // //     set2 +=  set2.append("item is" , items)
    // //     console.log(set2);
    
    // // }

// console.log(Array.from(set));

//MAP -----------------------------------


// const myMap = new Map()
// const key1 = "hey" , key2 = {} , key3 = function () {}

// myMap.set(key1, 'this is a string' )
// myMap.set(key2, 'this is a empty obj' )
// myMap.set(key3, 'this is a emply func' )

// console.log(myMap);
// console.log(myMap.size) // logging the size

// for (let key of myMap.keys()){ //getting the values of keys
//     console.log(key)
// }

// for (let [key,value] of myMap){ // getting values of both keys and pairs
//     console.log(key , value)
// }

// console.log(myMap.delete(key1)) // deleteing a key
// console.log(myMap.has(key1)) // checking key existance
// console.log(myMap.get(key1)) // geting the value of key1

//You can get an array of [key, value] pairs using the entries method:


// for (let entry of myMap.entries()) {
//   console.log(entry[0], entry[1]);
// }
// // or using destructuring
// for (let [key, value] of myMap.entries()) {
//   console.log(key, value);
// }
// date = 2023-10-12
// Days_of_the_week = ['mon' ,'tues' ,'wed' ,'thrud' ,'friday' ,'sat' , 'sunday']
// const daysoftheweek = Days_of_the_week[new Date(date).getDay()]
// console.log(daysoftheweek)
// // arrays and its methods---------------------


// jsbsdjndsaasj n