/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

const numJewelsInStones = (J, S) => {
  //convert strings to arrays
  const jewels = J.split("");
  const stones = S.split("");

  //create a new array (jewelsInStones) with the filtered results
  const result = stones.filter((el) => jewels.includes(el));
  return result.length;
};
