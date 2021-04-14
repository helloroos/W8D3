Array.prototype.bubbleSort = function() {
    let sorted = false;
    while (sorted == false) {
        sorted = true;
        for (let i = 0; i < this.length; i++){
            let j = i+1
            if (j == this.length){
                break;
            }
            if (this[i] > this[j]){
                let oldValue = this[i];
                this[i] = this[j];
                this[j] = oldValue;
                sorted = false
            }
        }
    }
    return this;
}

console.log([1,5,6,3,4,6].bubbleSort())

String.prototype.substrings = function() {
    let new_arr = [];
    for (let i=0; i < this.length; i++){
        for (let j = i+1; j < this.length + 1; j++) {
            let substring = this.slice(i,j);
            new_arr.push(substring);
        }
    }
    return new_arr;
}

console.log('hello'.substrings())