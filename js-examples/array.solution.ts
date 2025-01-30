function sumNumbers(numbers: number[]): number {
  return numbers.reduce((acc, val) => acc + val, 0);
}

// Error if you try to pass an array of mixed types
const values: number[] = [1, "two", 3, "four"];
// TypeScript Error: Type 'string' is not assignable to type 'number'

export {};
