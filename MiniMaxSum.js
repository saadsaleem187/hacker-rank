function miniMaxSum(arr) {
  arr = arr.sort((a, b) => a - b);
  let miniSum = 0;
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 1) {
      miniSum += arr[i];
    }
    if (i != 0) {
      maxSum += arr[i];
    }
  }
  console.log(miniSum + " " + maxSum);
}
