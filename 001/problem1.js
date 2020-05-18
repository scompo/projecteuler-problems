const MAX = 1000;

function shouldSum(n) {
  return n % 3 === 0 || n % 5 == 0;
}

async function s3o5(start = 0, end = 0) {
  let sum = 0;
  for (let i = start; i < end; i++) {
    if (shouldSum(i)) {
      sum = sum + i;
    }
  }
  return sum;
}

async function main() {
  return s3o5(3, MAX)
    .then((sum) => {
      return `The sum of all the multiples of 3 and 5 less than ${MAX} is: ${sum}`;
    });
}

if (import.meta.main) {
  main()
    .then(console.log)
    .catch(console.err);
}

export { s3o5, shouldSum };
