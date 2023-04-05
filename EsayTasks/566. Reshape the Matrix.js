function reshapeMatrix(mat, r, c) {
  // Asl matritsaning o'lchami
  const [m, n] = [mat.length, mat[0].length];
  // Matritsani tarqatish mumkinligini tekshirish
  if (m * n !== r * c) {
    return mat;
  }
  // Yangi tarqatilgan matritsaning o'lchamini belgilash
  const reshapedMat = new Array(r).fill().map(() => new Array(c).fill(0));
  // Yangi matritsaga o'tishni bajarish
  for (let i = 0; i < r * c; i++) {
    // Asl matritsaning yorliqlari
    const row = Math.floor(i / n);
    const col = i % n;
    // Tarqatilgan matritsaga joylashtirish
    reshapedMat[Math.floor(i / c)][i % c] = mat[row][col];
  }
  return reshapedMat;
}
