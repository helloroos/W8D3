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

// function fibonacci(n) {
//     if (n == 1) {
//         return [1]
//     }
//     if (n == 2) {
//         return [1, 1]
//     }
//     let prevDigits = fibonacci(n-1)
//     prevDigits.push((prevDigits[prevDigits.length - 2]) + (prevDigits[prevDigits.length - 1]))
//     return prevDigits
// }

// console.log(fibonacci(6))


function deepDup(array) {
    let new_arr = [];
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])){
            new_arr = new_arr.concat(deepDup(array[i]));
        } else {
            new_arr.push(array[i]);
        }
    }
    return new_arr
}


// console.log(deepDup([[1,2],4,[5,6,7]]))
// console.log(deepDup([[1],[2,[1,2,33]],4,5]))

function bSearch(array, target) {
    if (array.length == 0) {
        return null;
    }
    let mid = Math.floor(array.length/2);
    if (array[mid] == target){
        return mid
    } else if (array[mid] > target){
        return bSearch(array.slice(0,mid),target)
    } else{
        let result = bSearch(array.slice(mid+1), target)
        if (!result){
            return null
        } else {
            return mid + 1 + result
        }
    }
}

console.log(bSearch([1,2,3,4,5,6,7],6))