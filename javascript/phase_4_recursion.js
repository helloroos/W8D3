// function range(start, end) {
//     if (start == end) {
//         return [start]
//     }

//     return [start].concat(range(start + 1, end))
// }

// console.log(range(1, 5))

// function sumRec(arr) {
//     if (arr.length == 1) {
//         return arr[0]
//     }

//     return arr[0] + sumRec(arr.slice(1))
// }

// console.log(sumRec([4, 4, 4]))

// function exponent(base, exp) {
//     if (exp == 0) {
//         return 1
//     }
//     return base * exponent(base, exp -1)
// }

// console.log(exponent(5, 3))

function fibonacci(n) {
    if (n == 1) {
        return [1]
    }
    if (n == 2) {
        return [1, 1]
    }
    let prevDigits = fibonacci(n-1)
    prevDigits.push((prevDigits[prevDigits.length - 2]) + (prevDigits[prevDigits.length - 1]))
    return prevDigits
}

console.log(fibonacci(6))

