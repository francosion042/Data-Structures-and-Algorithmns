const fibo = n => {
  if (n <= 1) return n;
  var sum = 0,
    last = 1,
    lastLast = 0;
  for (i = 1; i < n; i++) {
    sum = lastLast + last;
    lastLast = last;
    last = sum;
  }
  return sum;
};

console.log(fibo(10));
