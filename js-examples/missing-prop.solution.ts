interface User {
  name: string;
  age: number;
}

function printUser(user: User) {
  console.log(`Name: ${user.name}`);
  console.log(`Age: ${user.age}`);
}

// TypeScript will show an error if `age` is missing:
const user = { name: "Bob" };
printUser(user);
// Error: Property 'age' is missing in type '{ name: string; }'
// but required in type 'User'.

export {};
