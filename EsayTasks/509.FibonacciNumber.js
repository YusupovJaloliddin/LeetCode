/**
 * @param {number} n
 * @return {number}
 */
var fib = function (N) {
  if (N === 0 || N === 1) return N;

  let first = 0, second = 1;
  let summa = first + second;

  for (let i = 2; i < N; i++) {
    first = second;
    second = summa;

    summa = first + second;
  }

  return summa
};
