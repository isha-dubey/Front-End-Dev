// palindrome

// const num = 1212
// const reverseNum = (num) => {
//     if(num < 0){
//         return false
//     }
//     else {
//     let reverse_num = num.toString().split("").reverse().join("")
//     console.log(reverse_num)}

// }

// reverseNum(num)

// Fiboonacci
const fib = (n) => {
    const arr = [0,1]
    for (let i = 2; i <= n; i++) {
        arr.push(arr[i-1]+arr[i-2]);
    }
    console.log(arr[n])

}

fib(5)

// or by recursion

const fib1 = () => {
    if (n <= 1) return n;
    
    return fib(n-1) + fib(n-2)

}

console.log(fib(3))

// anagram question means ki u have a word and a jumbled word to we will see it dono same letters se bane hai ya nahi

const anagram = ()