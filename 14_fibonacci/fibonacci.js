const fibonacci = function(n) {
  n = Number(n);
  if (n < 0) return "OOPS";
  else if (n === 0) return 0;
  else if (n === 1 || n === 2) return 1;

  let a = 1;
  let b = 1;
  let currNum = 0;
  for (let i = 2; i < n; i++) {
    currNum = a + b;
    b = a;
    a = currNum;
  }
  return currNum;
};

// Do not edit below this line
module.exports = fibonacci;
