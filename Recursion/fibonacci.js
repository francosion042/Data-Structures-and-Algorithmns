// const fibo = n => {
//   if (n <= 1) return n;
//   var sum = 0,
//     last = 1,
//     lastLast = 0;
//   for (i = 1; i < n; i++) {
//     sum = lastLast + last;
//     lastLast = last;
//     last = sum;
//   }
//   return sum;
// };

// console.log(fibo(10));

/////////////////////////////////////////////////////////////////////////////////////
/*with recursion*/

const fiboRec = n => {
  if (n <= 1) {
    return n;
  } else {
    return fiboRec(n - 1) + fiboRec(n - 2);
  }
};

console.log(fiboRec(10));
