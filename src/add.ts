// 03 Adding into Array
// Filename : add.ts
//
// Create a function add that takes an arbitrary number of arguments, and adds them all to an array.

export const add = (array: number[], ...args: number[]): number[] => {
    return [...array, ...args];
}
