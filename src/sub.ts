// 04 Removing into Array
// Filename : sub.ts
//
// Create a function sub that subtracts all the arguments but the first from the first


type DeepArray = Array<DeepArray | unknown>;

const sub = (defaultArray: DeepArray): DeepArray => {
    const newArray: DeepArray = [...defaultArray];

    return [newArray[0]];
};

// Test
console.log(sub([1,2,3,[[[2]]], undefined,false, "b"]));
