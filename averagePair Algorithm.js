function averagePair(array, num) {
  if (array.length === 0) return false;
  let c = 0;
  for (let i = c + 1; i < array.length + 1; i++) {
    let avg = (array[c] + array[i]) / 2;
    if (i === array.length) {
      i = c + 1;
      c++;
    } else {
      if (avg === num) {
        return true;
      }
    }
  }
  return false;
}

[(1, 3, 3, 5, 6, 7, 10, 12, 19)];

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
