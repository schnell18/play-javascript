function fib1(n) {
    if (n <= 2) {
        return 1;
    }
    else {
        return fib1(n-2) + fib1(n-1);
    }
}

function fib2(n) {
  let a = 1, b = 1;
  for (let i = 3; i <= n; i++) {
    [a, b] = [b, a + b]
  }
  return b;
}

