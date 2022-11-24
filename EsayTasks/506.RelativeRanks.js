/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  const [aBeforeB, bBeforeA] = [-1, 1] // for better readability when do sorting below

  const positionRankMap = {
    0: "Gold Medal",
    1: "Silver Medal",
    2: "Bronze Medal",
  }

  const indexRankMap = Object.fromEntries(
    score
      .map((s, i) => [s, i]) // create array of [score, index]
      .sort(([sA], [sB]) => (sA > sB ? aBeforeB : bBeforeA)) // sort the array by score, descending
      .map(([_, originalScoreIndex], index) => [
        positionRankMap[index] || String(index + 1),
        originalScoreIndex,
      ]) // create array of [rank name, index in original score]
      .map(([rank, originalScoreIndex]) => [originalScoreIndex, rank]) // to convert to object in the next step
  )

  return score.map((_, i) => indexRankMap[i])
}
