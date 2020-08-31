
const composeN = <T>(params1: Function, ...fN: any) => {
    return fN.reduce((prev: (arg0: T) => any, curr: (arg0: any) => any) => {
        return (a: T) => curr(prev(a));
    }, params1);
};
