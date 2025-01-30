const greet = (name) => {
  return `Hello, ${name.toUpperCase()}`;
};

console.log(greet("Alice")); // "Hello, ALICE"
console.log(greet(42)); // Runtime Error: name.toUpperCase is not a function

export {};
