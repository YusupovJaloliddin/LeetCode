function countAndSay(n) {
  if (n === 1) {
    return '1';
  }
  const prev = countAndSay(n - 1);
  let count = 1;
  let result = '';
  for (let i = 0; i < prev.length; i++) {
    if (prev[i] !== prev[i + 1]) {
      result += count + prev[i];
      count = 1;
    } else {
      count++;
    }
  }
  return result;
}
