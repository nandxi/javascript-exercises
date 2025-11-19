const fibonacci = function(n) {
  n = Number(n);
  if (n < 0) return "OOPS";
  else if (n === 0) return 0;

  let a = 1;
  let b = 0;
  let currNum;
  for (let i = 2; i <= n; i++) {
    currNum = a + b;
    b = a;
    a = currNum;
  }
  return a;
};

// Do not edit below this line
module.exports = fibonacci;
