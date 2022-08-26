function diagonalDifference(arr) {
  let n = arr.length;
  let leftDiagonalSum = 0;
  let rightDiagonalSum = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // Left Diagonal
      if (i === j) {
        leftDiagonalSum += arr[i][j];
      }
      // Right Diagonal
      if (i + j == n - 1) {
        rightDiagonalSum += arr[i][j];
      }
    }
  }
  return Math.abs(leftDiagonalSum - rightDiagonalSum);
}
