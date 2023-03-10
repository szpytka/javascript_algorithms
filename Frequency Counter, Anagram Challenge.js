function validAnagram(string1, string2) {
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};
  string1 = string1.toLowerCase();
  string2 = string2.toLowerCase();

  for (let char of string1) {
    !frequencyCounter1[char]
      ? (frequencyCounter1[char] = 1)
      : frequencyCounter1[char]++;
  }
  for (let char of string2) {
    !frequencyCounter2[char]
      ? (frequencyCounter2[char] = 1)
      : frequencyCounter2[char]++;
  }

  const frequency = [frequencyCounter1, frequencyCounter2];

  if (Object.keys(frequency[0]).length !== Object.keys(frequency[1]).length) {
    return false;
  }

  for (let key of Object.keys(frequency[0])) {
    if (frequency[0][key] !== frequency[1][key]) {
      return false;
    }
  }

  return true;
}

console.log(
  validAnagram('anagram', 'nagaram'),
  validAnagram('awesome', 'awesom'),
  validAnagram('', ''),
  validAnagram('rat', 'car')
);

// true, false, true, false
