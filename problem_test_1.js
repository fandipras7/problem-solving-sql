function findMinMaxSum(arr) {
  arr.sort((a, b) => a - b);
  const minSum = arr.slice(0, arr.length - 1).reduce((acc, curr) => acc + curr, 0);
  const maxSum = arr.slice(1).reduce((acc, curr) => acc + curr, 0);

  return [minSum, maxSum];
}

const arr = [1, 3, 5, 7, 9];
const [minValue, maxValue] = findMinMaxSum(arr);
console.log(minValue, maxValue);
