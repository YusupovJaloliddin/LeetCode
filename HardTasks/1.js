//273- Integer to English Words
const upToTwenty = [
  "",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Eleven",
  "Twelve",
  "Thirteen",
  "Fourteen",
  "Fifteen",
  "Sixteen",
  "Seventeen",
  "Eighteen",
  "Nineteen",
];
const tens = [
  "",
  "Ten",
  "Twenty",
  "Thirty",
  "Forty",
  "Fifty",
  "Sixty",
  "Seventy",
  "Eighty",
  "Ninety",
];
const thousands = ["", "Thousand", "Million", "Billion"];
function numToWords(num) {
  if (num.toString().length > 12) return "TOO BIG";
  if (num === 0) {
    return "Zero";
  }
  let counter = 0;
  let res = "";
  while (num > 0) {
    if (num % 1000 !== 0) {
      res = `${getNums(num % 1000)} ${thousands[counter]} ${res}`;
    }
    num = Math.floor(num / 1000);
    counter++;
  }
  let arr = res.split(" ");
  arr = arr.filter((t) => {
    if (t != "") return t;
  });
  res = arr.join(" ");
  return res;
}

const getNums = (number) => {
  if (number === 0) {
    return "";
  } else if (number < 20) {
    return upToTwenty[number];
  } else if (number < 100) {
    return `${tens[Math.floor(number / 10)]} ${getNums(number % 10)}`;
  } else {
    return `${upToTwenty[Math.floor(number / 100)]} Hundred ${getNums(
      number % 100
    )}`;
  }
};

let testNum = 0;
let result = numToWords(testNum);
console.log(result);
