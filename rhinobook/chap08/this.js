// Explore `this` in Javascript
// "use strict";

let o = {
    m: function() {
        let self = this;
        console.log("in method of object, this === o evals to: ".concat(this === o))
        let f2 = () => {
            console.log("in arrow function f2(), this is: ".concat(this))
            console.log("in arrow function f2(), this === o evals to: ".concat(this === o))
            console.log("in arrow function f2(), self === o evals to: ".concat(self === o))
        };

        const f3 = (function() {
            console.log("in nested function f3() using bind(), this is: ".concat(this))
            console.log("in nested function f3() using bind(), this === o evals to: ".concat(this === o))
            console.log("in nested function f3() using bind(), self === o evals to: ".concat(self === o))
        }).bind(this);

        f2();
        f3();
        f1();

        function f1() {
            console.log("in nested function f1(), this is: ".concat(this))
            console.log("in nested function f1(), this === o evals to: ".concat(this === o))
            console.log("in nested function f1(), self === o evals to: ".concat(self === o))
        }
    }
};

o.m();
