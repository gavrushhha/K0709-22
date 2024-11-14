function curry(custom_function) {
    return function curried(...args) {
        if (args.length >= custom_function.length) {
            return custom_function.apply(this, args);
        } 
        else {
            return function (...nextArgs) { return curried.apply(this, args.concat(nextArgs)) };
        }
    };
}

function add(a, b) {
    return a + b;
}

const curriedAdd = curry(add);
console.log(curriedAdd(2)(3));