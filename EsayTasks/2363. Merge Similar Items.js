var mergeSimilarItems = function (items1, items2) {
  let maxLen = Math.max(items1.length, items2.length);

  let hash = {};

  for (let i = 0; i < maxLen; i++) {
    if (items1[i] && hash[items1[i][0]] === undefined) hash[items1[i][0]] = 0;
    if (items2[i] && hash[items2[i][0]] === undefined) hash[items2[i][0]] = 0;

    if (items1[i]) hash[items1[i][0]] += items1[i][1];
    if (items2[i]) hash[items2[i][0]] += items2[i][1];
  }

  return Object.keys(hash).map((key) => [key, hash[key]]);
};
