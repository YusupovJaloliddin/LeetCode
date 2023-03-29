/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
  let longestPal = '';
  
  // berilgan indexlardan boshlab chiqamiz
  for (let i = 0; i < s.length; i++) {
    // palindrom uzunligi toq son, i-ni o'rta harf deb qabul qilamiz
    let left = i, right = i;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    const currentPal = s.slice(left + 1, right);
    if (currentPal.length > longestPal.length) {
      longestPal = currentPal;
    }

    // palindrom uzunligi juft son, i va i+1 orasidagi 2 ta harfni o'rta harf deb qabul qilamiz
    left = i, right = i+1;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    const currentEvenPal = s.slice(left + 1, right);
    if (currentEvenPal.length > longestPal.length) {
      longestPal = currentEvenPal;
    }
  }
  return longestPal;
}
