function add(x: number, y: number) {
  return x + y.toUpperCase(); // Typescript now catches the problem.
}

console.log(add(1, "Hello world"));

export {};
