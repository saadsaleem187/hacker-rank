function compareTriplets(a, b) {
  let result = [];
  let aTotal = 0;
  let bTotal = 0;
  for (let i = 0; i < a.length; i++) {
    // Alice Points
    if (a[i] > b[i]) {
      aTotal = aTotal + 1;
    }
    // Bob Points
    if (a[i] < b[i]) {
      bTotal = bTotal + 1;
    }
  }
  result[0] = aTotal;
  result[1] = bTotal;
  return result;
}
