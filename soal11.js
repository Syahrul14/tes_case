function countPattern(string, pattern) {
  var count = 0;
  var patternLength = pattern.length;

  for (var i = 0; i <= string.length - patternLength; i++) {
    var subString = string.substr(i, patternLength);
    var sortedSubString = subString.split("").sort().join("");

    if (sortedSubString === pattern.split("").sort().join("")) {
      console.log("index " + i + " : " + subString);
      count++;
    }
  }

  return count;
}

var string =
  "ABDCKDHJABDCBDAUOQJDBADCLDLCHBCBABCBAABCDAJDBABDCABDABDBCADBCASSJGABCDAUTACBDBQWUDNCDBCADKDHABDJGBDABCBDBADCACADBADBCBAD";
var pattern = "ABCD";
var patternCount = countPattern(string, pattern);

console.log("Jumlah pola yang ditemukan : " + patternCount);
