// Create a function compose that takes 2 functions and does function composition
// compose(g, f) should return a function that first calls f and then g on its argument.

const toUppercase = (array: string): string => {
    return array.slice().toUpperCase();
};

const reverse = (array: string): string => {
    return array.slice().split("").reverse().join("");
};

const compose = (...func: Function[]): Function => {
    return (x: Function) => func.reduce((v, f) => f(v), x);
};
