/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
const Stinn = (a) => a.sort((x, y) => x - y);

const minMovesToSeat = (a, b) => {
  Stinn(a);
  Stinn(b);
  let n = a.length,
    res = 0;
  for (let i = 0; i < n; i++) {
    res += Math.abs(a[i] - b[i]);
  }
  return res;
};
