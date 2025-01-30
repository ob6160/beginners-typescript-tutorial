function printUser(user) {
  console.log(`Name: ${user.name}`);
  console.log(`Age: ${user.age}`);
}

const user = { name: "Bob" };
printUser(user);
// Output:
// Name: Bob
// Age: undefined  <-- This might cause confusion or a bug later

export {};
