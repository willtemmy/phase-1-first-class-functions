function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return add = (num1,num2) => num1+num2;
}

function returnsAnAnonymousFunction() {
    return () => "yes"
}