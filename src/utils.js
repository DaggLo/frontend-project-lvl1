const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const random = (beginValue) => (endValue) => Math.floor(Math.random() * endValue) + beginValue;

const gcd = (x, y) => {
  let a = x > y ? x : y;
  let b = x < y ? x : y;

  let result = b;

  while (a % b !== 0) {
    result = a % b;
    a = b;
    b = result;
  }
  return result;
};

export {
  isPrime,
  gcd,
  random as default,
};
