function areThereDuplicates(...args) {
  let array = [...args];
  let frequency = {};
  for (let item of array) {
    if (!frequency[item]) {
      frequency[item] = 1;
    } else {
      frequency[item]++;
    }
  }
  for (let item of array) {
    if (frequency[item] > 1) return true;
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true
