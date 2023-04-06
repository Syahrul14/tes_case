const digitConvert = (digit) => {
  return String.fromCharCode(64 + parseInt(digit));
};

const getCombinations = (digits, i, currentCombination, combinations) => {
  if (i === digits.length) {
    combinations.push(currentCombination);
    return;
  }

  const oneDigit = digitConvert(digits[i]);
  getCombinations(digits, i + 1, currentCombination + oneDigit, combinations);

  if (i === digits.length - 1 || digits[i] >= 3) {
    return;
  }

  const twoDigits = digitConvert(digits[i] * 10 + parseInt(digits[i + 1]));
  getCombinations(digits, i + 2, currentCombination + twoDigits, combinations);
};

const getDigitCombinations = (digitString) => {
  const digits = digitString.split("").map((digit) => parseInt(digit));
  const combinations = [];

  getCombinations(digits, 0, "", combinations);

  return combinations;
};

const digitString = "1243752521494312";
const combinations = getDigitCombinations(digitString);

console.log("Jumlah kombinasi:", combinations.length);
console.log(combinations);
