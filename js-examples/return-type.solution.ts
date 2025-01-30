function doSomething(list: number[]): number | undefined {
  for (let i = 0; i < list.length; i++) {
    if (list[i] > 10) {
      return list[i];
    }
  }
  return undefined;
}

const result = doSomething([5, 12, 3]);
console.log(result);
// Output: 12
