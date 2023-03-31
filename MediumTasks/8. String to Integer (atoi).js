/**
 * @param {string} s
 * @return {number}
 */
function myAtoi(s) {
  // Step 1: Read in and ignore any leading whitespace.
  s = s.trim();

  // Step 2: Check if the next character is '-' or '+'.
  let sign = 1;
  if (s[0] === '-') {
    sign = -1;
    s = s.substring(1);
  } else if (s[0] === '+') {
    s = s.substring(1);
  }

  // Step 3: Read in next the characters until the next non-digit character or the end of the input is reached.
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char >= '0' && char <= '9') {
      num = num * 10 + parseInt(char);
    } else {
      break;
    }
  }

  // Step 4: Convert these digits into an integer and change the sign as necessary.
  num *= sign;

  // Step 5: Clamp the integer to the 32-bit signed integer range.
  const INT_MAX = Math.pow(2, 31) - 1;
  const INT_MIN = -Math.pow(2, 31);
  if (num > INT_MAX) {
    return INT_MAX;
  } else if (num < INT_MIN) {
    return INT_MIN;
  }

  // Step 6: Return the integer as the final result.
  return num;
}
