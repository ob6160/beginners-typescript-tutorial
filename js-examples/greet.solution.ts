const greet = (name: string): string => {
  return `Hello, ${name.toUpperCase()}`;
};

// TypeScript will throw an error if you do this:
console.log(greet(42));
// Error: Argument of type 'number' is not assignable to parameter of type 'string'.

export {};
