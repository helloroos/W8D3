Array.prototype.myEach = function(callback1) {

    for (let i = 0; i < this.length; i++) {
        callback1(this[i]);
    };
    return;
};

// const tester = function(x) {
//     console.log(x);
// };

// [1, 2, 3].myEach(tester)



// Array.prototype.myMap = function(callback2) {
//     let new_arr = [];

//     this.myEach(function (x) { new_arr.push(callback2(x))})
//     // for (let i = 0; i < this.length; i++){
//     //     new_arr.push(callback(this[i]))
//     // }
//     return new_arr
// }

// function multiply(x){
//     return x*2;
// }

// console.log([1,2,3,4].myMap(multiply))

Array.prototype.myReduce = function(callback, [initialValue]){
    let startValue;
    let testValue;
    if (initialValue){
        startValue = initialValue;
        testValue = this;
    }
    else {
        startValue = this[0];
        testValue = this.slice(1)
    }
}

// without initialValue
[1, 2, 3].myReduce(function (acc, el) {
    return acc + el;
}); // => 6

// with initialValue
[1, 2, 3].myReduce(function (acc, el) {
    return acc + el;
}, 25); // => 31