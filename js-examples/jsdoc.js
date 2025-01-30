/**
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
function add(x, y) {
  return x + y.toUpperCase(); // ❌ This will crash at runtime
}

console.log(add(1, 2));

export {};
