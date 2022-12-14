//1773. Count Items Matching a Rule

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  let num,
    count = 0;
  switch (ruleKey) {
    case "color":
      num = 1;
      break;
    case "type":
      num = 0;
      break;
    default:
      num = 2;
      break;
  }

  for (let i = 0; i < items.length; i++) {
    if (ruleValue === items[i][num]) {
      count++;
    }
  }
  return count;
};

console.log(
  countMatches(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "lenovo"],
      ["phone", "gold", "iphone"],
      ["phone", "silver", "iphone"],
    ],
    "name",
    "lenovo"
  )
);
