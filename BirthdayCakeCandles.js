function birthdayCakeCandles(candles) {
  candles.sort((a, b) => a - b);
  let largest = 0;
  let tallest = 0;
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] > largest) {
      largest = candles[i];
    }
  }
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] == largest) {
      tallest++;
    }
  }
  return tallest;
}
