// program to check leap year
function checkLeapYear(year) {
  //three conditions to find out the leap year
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log(year + ' is a leap year')
  } else {
    console.log(year + ' is not a leap year')
  }
}

checkLeapYear(year)

// longest word and odd

function findLongestOddWord(array) {
  var longestOddWord = ''

  array.forEach(function (word) {
    if (word.length > longestOddWord.length && word.length % 2 != 0) {
      longestOddWord = word
    }
  })

  return longestOddWord
}

var word = findLongestOddWord([
  'The',
  'quick',
  'brown',
  'fox',
  'jumped',
  'over',
  'the',
  'hellosazzad',
  'dog',
])
console.log(word)
