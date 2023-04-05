/**
 * @param {number[][]} grid
 * @return {number}
 */
function islandPerimeter(grid) {
  let perimeter = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  // Har bir jadval qator va ustunlari ustida yurish
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 1) {
        // Agar jadvalida bir adad daraxt topilsa, hohlagancha qadam yurib chiqamiz
        perimeter += 4;

        // Katta bir yondan jadval ustunlari va qatorlari tekshiriladi
        if (row > 0 && grid[row - 1][col] === 1) {
          perimeter -= 2;
        }
        if (col > 0 && grid[row][col - 1] === 1) {
          perimeter -= 2;
        }
      }
    }
  }

  return perimeter;
}
