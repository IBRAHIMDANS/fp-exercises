// Write a functions that :
//
// calculate the sum of a deep array
// calculate the depth of the array
// find the largest value in a tree
// find the smallest value in a tree
// Example of an array : [1, [[2], 3], [4], 5, [6, 42, [[86], [[12]], 1337]], 1]

const sum = (a: number, b: number): number => a + b;
const array = [1, [[2], 3], [4], 5, [6, 42, [[86], [[12]], 1337]], 1];

type deepArray = Array<deepArray | number>;

const sumDeepArray = (arrayInput: deepArray): number => {
    let total = 0;
    arrayInput.forEach(item => {
        typeof item !== 'number' ? total = sum(total, sumDeepArray(item)) : total = sum(total, item);
    });
    return total;
};
const depthArray = (arr: unknown): number => {
    return Array.isArray(arr) ? 1 + Math.max(...arr.map(depthArray)) : 0;
};
const compare = (a: number, b: number, isMax: boolean): number => {
    return !isMax ? (a < b ? a : b) : (a > b ? a : b);
};

const findItem = (arr: deepArray, isMax: boolean): number => {
    let result: number = 0;
    arr.map(item => {
        if (typeof item !== 'number') {
            result = findItem(item, isMax);
        } else {
            result = compare(result, item, isMax);
        }
    });
    return result;
};

const findMaxInArray = (arr: deepArray): number => findItem(arr, true);
const findMinInArray = (arr: deepArray): number => findItem(arr, false);

// Test
console.log(`sumDeepArray ==> ${sumDeepArray(array)}`);
console.log(`Depth array ==> ${depthArray(array)}`);
console.log(`Largest value in array ==> ${findMaxInArray(array)}`);
console.log(`Smallest value in array ==> ${findMinInArray(array)}`);
