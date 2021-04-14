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

Array.prototype.myReduce = function(callback3, initialValue){
    let startValue;
    let testValue;
    if (initialValue){
        startValue = initialValue;
        testValue = this;
    } else {
        startValue = this[0];
        testValue = this.slice(1);
    };
    testValue.myEach(function(x) { 
        startValue = callback3(startValue, x);
    })
    return startValue;
}

function summer(acc, el) {
    return acc + el;
}

// without initialValue
console.log([1, 2, 3].myReduce(summer, 25)); // => 6

// // with initialValue
// [1, 2, 3].myReduce(function (acc, el) {
//     return acc + el;
// }, 25); // => 31


// def my_inject(accumulator = nil, & prc)
//     arr = self

//     if accumulator.nil ?
//         accumulator = self.first
//         arr = self.drop(1)
//     end

//     arr.each do | el |
//         accumulator = prc.call(accumulator, el)
//         end

//     accumulator
// end

// Array.prototype.myReduce = function(callback3, [initialValue]){
//     let arr = this;

//     if (initialValue == null) {
//         let initialValue = arr[0];
//         let el = arr.slice(1);
//     }

//     arr.myEach(function(x) {
//     })

//     return acc;
// }