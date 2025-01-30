function doSomething(list) {
  list.forEach((item) => {
    if (item > 10) {
      return item;
      // This `return` only exits the forEach callback, not the doSomething function
    }
  });
  // ends up returning undefined
}

const result = doSomething([5, 12, 3]);
console.log(result);
// Output: undefined, because forEach does not return items the same way map or filter does

export {};
