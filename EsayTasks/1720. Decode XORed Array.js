var decode = function (encoded, first) {
  let len = encoded.length;
  let res = [];
  res[0] = first;
  for (let i = 0; i < len; i++) {
    res[i + 1] = res[i] ^ encoded[i];
  }
  return res;
};
