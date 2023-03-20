function binarySearch(arr, elem) {
  let start = 0,
    end = arr.length - 1;
  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    if (elem === arr[middle]) return middle;
    elem < arr[middle] ? (end = middle - 1) : (start = middle + 1);
  }
  return -1;
}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28], 28));
