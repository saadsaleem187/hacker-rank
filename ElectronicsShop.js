function getMoneySpent(keyboards, drives, b) {
  let total = [];
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      if (keyboards[i] + drives[j] <= b) {
        total.push(keyboards[i] + drives[j]);
      }
    }
  }
  if (total.length > 0) {
    return Math.max(...total);
  } else {
    return -1;
  }
}
