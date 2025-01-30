const values = [1, "two", 3, "four"];
const sum = values.reduce((acc, val) => acc + val, 0);
console.log(sum);
// Output: "0two3four", which is a string concatenation rather than numerical addition

export {};
