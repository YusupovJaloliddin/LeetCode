/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  let leastIndexArr = [];
  let leastIndexSum = Infinity;
  for (let i = 0; i < list1.length; i++) {
    for (let j = 0; j < list2.length; j++) {
      if (list1[i] === list2[j]) {
        if (i + j < leastIndexSum) {
          leastIndexSum = i + j;
        }
      }
    }
  }
  for (let i = 0; i < list1.length; i++) {
    for (let j = 0; j < list2.length; j++) {
      if (list1[i] === list2[j]) {
        if (i + j == leastIndexSum) {
          leastIndexArr.push(list1[i]);
        }
      }
    }
  }
  return leastIndexArr;
};
