module.exports = function toReadable(number) {
  const one = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const teens = {
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
  };
  const ten = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];
  const hundred = [
    '',
    'one hundred',
    'two hundred',
    'three hundred',
    'four hundred',
    'five hundred',
    'six hundred',
    'seven hundred',
    'eight hundred',
    'nine hundred',
  ];

  const yourNumberOnes = number % 10;
  const yourNumberTen = Math.floor((number % 100) / 10);
  const yourNumberHundred = Math.floor(number / 100);
  const yourTensAndOnes = number % 100;
  const numberInWord = [];

  if (number === 0) return 'zero';
  if (yourNumberHundred > 0) {
    numberInWord.push(hundred[yourNumberHundred]);
  }
  if (yourTensAndOnes >= 10 && yourTensAndOnes <= 19) {
    numberInWord.push(teens[yourTensAndOnes]);
  } else {
    if (yourNumberTen > 1) {
      numberInWord.push(ten[yourNumberTen]);
    }
    if (yourNumberOnes > 0) {
      numberInWord.push(one[yourNumberOnes]);
    }
  }
  return numberInWord.join(' ').trim();
};
