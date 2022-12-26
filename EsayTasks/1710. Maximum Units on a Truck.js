/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]);
  let result = 0;
  boxTypes.forEach((type) => {
    if (truckSize <= 0) return result;
    else {
      result += (truckSize - type[0] > 0 ? type[0] : truckSize) * type[1];
      truckSize = truckSize - type[0];
    }
  });
  return result;
};
