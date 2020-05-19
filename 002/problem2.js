const MAX = 4000000;

function fibo(n) {
  if (n <= 1) {
    return n;
  } else {
    const res = fibo(n - 1) + fibo(n - 2);
    return res;
  }
}

function memoize(func) {
  var memo = {};
  var slice = Array.prototype.slice;

  return function () {
    var args = slice.call(arguments);

    if (args in memo) {
      return memo[args];
    } else {
      return (memo[args] = func.apply(this, args));
    }
  };
}

const memoFibo = memoize(fibo);

async function main() {
  let sum = 0;
  for (let i = 1; i < MAX; i++) {
    const res = memoFibo(i);
    if (res > MAX) {
      break;
    }
    if (res % 2 == 0) {
      sum += res;
    }
  }
  return `The sum of all the even fibonacci numbers smaller than ${MAX} is: ${sum}`;
}

if (import.meta.main) {
  main()
    .then(console.log)
    .catch(console.err);
}
