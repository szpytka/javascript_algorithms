function sameFrequency(x, y) {
  x = String(x).split('').map(Number);
  y = String(y).split('').map(Number);
  if (x.length !== y.length) return false;
  let firstFrequency = {};
  let secondFrequency = {};
  for (let num of x) {
    if (!firstFrequency[num]) {
      firstFrequency[num] = 1;
    } else {
      firstFrequency[num]++;
    }
  }

  for (let num of y) {
    if (!secondFrequency[num]) {
      secondFrequency[num] = 1;
    } else {
      secondFrequency[num]++;
    }
  }

  for (let num of y) {
    if (secondFrequency[num] !== firstFrequency[num]) return false;
  }

  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
