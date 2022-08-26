function plusMinus(arr) {
  let n = arr.length;
  let positiveNumbersCount = 0;
  let negativeNumbersCount = 0;
  let zeroNumbersCount = 0;
  for (let i = 0; i < n; i++) {
    // If number is positive
    if (Math.sign(arr[i]) == 1) {
      positiveNumbersCount += 1;
    }
    // If number is negative
    if (Math.sign(arr[i]) == -1) {
      negativeNumbersCount += 1;
    }
    // If number is zero
    if (Math.sign(arr[i]) == 0) {
      zeroNumbersCount += 1;
    }
  }
  // Proportion of positive values
  let positiveNumbersProportion = positiveNumbersCount / n;
  // Proportion of negative values
  let negativeNumbersProportion = negativeNumbersCount / n;
  // Proportion of zero values
  let zeroNumbersProportion = zeroNumbersCount / n;
  // Print all values to 6 values after decimal
  console.log(positiveNumbersProportion.toFixed(6));
  console.log(negativeNumbersProportion.toFixed(6));
  console.log(zeroNumbersProportion.toFixed(6));
}
