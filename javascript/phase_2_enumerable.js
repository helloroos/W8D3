Array.prototype.myEach = function(callback) {

    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    };
    return;
};

const tester = function(x) {
    console.log(x);
};

[1, 2, 3].myEach(tester)

