// Array.prototype.my_uniq = function() {
//     let new_arr = [];
//     for (let i = 0; i < this.length; i++){
//         // this at i
//         if (!new_arr.includes(this[i])){
//             new_arr.push(this[i]);
//         }
//     }
//     return new_arr;
// }

// console.log([1, 2, 2, 3, 3, 3].my_uniq())

// Array.prototype.twoSum = function() {
//     let new_array = [];
//     for (let i = 0; i < this.length; i++){
//         for (let j = i + 1; j < this.length; j++){
//             let pair = [this[i], this[j]]
//             if (pair[0] + pair[1] == 0 ){
//                 new_array.push(pair);
//             }
//         }
//     }
//     return new_array;
// }

// console.log([1, -1, 5, 6, -4, -6].twoSum())

Array.prototype.transpose = function() {
    let new_width = this.length
    let new_height = this[0].length
    // let new_arr = new Array(new_height).fill(new Array(new_width).fill(0))
    // new_arr[0][1] = 5
    let new_arr = [] 
    for (let i = 0; i < new_width; i++) {
        let new_row = []

        for (let j = 0; j < new_height; j++) {
            new_row.push(this[j][i])
        }
        new_arr.push(new_row)
    }
    return new_arr
}

console.log([[1, 2, 3],[4, 5, 6],[7, 8, 9]].transpose())