const random = (beginValue, endValue) => Math.floor(Math.random() * endValue) + beginValue;

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
  gcd,
  random as default,
};
