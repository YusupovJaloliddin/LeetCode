let climbStairs = function (n) {
  let dp = [0, 1];
  for (let i = 0; i < n; i++) {
    dp = [dp[1], dp[0] + dp[1]];
  }
  return dp[1];
};
