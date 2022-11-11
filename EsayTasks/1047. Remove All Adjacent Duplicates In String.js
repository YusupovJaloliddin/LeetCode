let removeDuplicates = function (S) {
  if (S.length < 2) {
    return S;
  }

  let stack = [S.charAt(0)];
  for (let i = 1; i < S.length; i++) {
    if (stack[stack.length - 1] == S.charAt(i)) {
      stack.pop();
    } else {
      stack.push(S.charAt(i));
    }
  }
  return stack.join("");
};
