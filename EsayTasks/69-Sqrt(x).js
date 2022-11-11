// Binary search approach

let mySqrt = function (x) {
  let left = 1;
  let right = x;
  // The square root of 0 or 1 is itself
  if (x < 2) return x;

  // Use binary search to find the square root or the whole number closest to the square root
  while (left < right) {
    // Find the mid point between left and right
    const mid = Math.floor((left + right) / 2);
    // Return the mid point if this is the square root
    if (mid * mid === x) return mid;
    // If mid squared is greater than x then the answer must be on the left half of mid
    else if (mid * mid > x) right = mid;
    // If mid squred is less than x then the answer must be on the right half of mid
    else left = mid + 1;
  }
  return left - 1;
};
