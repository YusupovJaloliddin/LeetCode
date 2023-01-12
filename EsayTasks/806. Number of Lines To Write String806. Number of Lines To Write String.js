//806. Number of Lines To Write String
/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
const numberOfLines = (widths, s) =>
  s
    .split("")
    .reduce(
      (res, c, i) => [
        res[1] + widths[s.charCodeAt(i) - 97] > 100 ? res[0] + 1 : res[0],
        res[1] + widths[s.charCodeAt(i) - 97] > 100
          ? widths[s.charCodeAt(i) - 97]
          : res[1] + widths[s.charCodeAt(i) - 97],
      ],
      [1, 0]
    );
