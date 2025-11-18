const palindromes = function (sentence) {
  const punctuations = [".", ",", "!", " "];
  const sentenceArr = sentence.split("").filter((character) => !punctuations.includes(character));
  const newSentence = sentenceArr.join("");
  const reversedSentence = sentenceArr.reverse().join("");
  return newSentence.toLowerCase() === reversedSentence.toLowerCase();

};

// Do not edit below this line
module.exports = palindromes;
