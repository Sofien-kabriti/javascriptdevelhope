function memoize(fn) {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return `cache = ${cache[n]}`;
    } else {
      cache[n] = fn(n);
      return cache[n];
    }
  };
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}

factorial = memoize(factorial);
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));
