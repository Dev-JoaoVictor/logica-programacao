function miniMaxSum(arr) {
  arr.sort((a, b) => a - b);
  const minSum = arr.slice(0, 4).reduce((acc, current) => acc + current, 0);
  const maxSum = arr.slice(1).reduce((acc, current) => acc + current, 0);
  console.log(minSum + " " + maxSum);
}

console.log(miniMaxSum([1, 2, 3, 4, 5]))