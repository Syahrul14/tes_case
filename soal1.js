function countPattern(string, pattern) {
  let count = 0;
  let patternLength = pattern.length;

  for (let i = 0; i <= string.length - patternLength; i++) {
    let subString = string.substr(i, patternLength);
    let sortedSubString = subString.split("").sort().join("");

    if (sortedSubString === pattern.split("").sort().join("")) {
      console.log("index " + i + " : " + subString);
      count++;
    }
  }

  return count;
}

let string =
  "ABDCKDHJABDCBDAUOQJDBADCLDLCHBCBABCBAABCDAJDBABDCABDABDBCADBCASSJGABCDAUTACBDBQWUDNCDBCADKDHABDJGBDABCBDBADCACADBADBCBAD";
let pattern = "ABCD";
countPattern(string, pattern);

// console.log("Jumlah pola yang ditemukan : " + patternCount);
