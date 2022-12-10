/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
      s = s.split(" ");
  let tempArr = [],
    number;
  s.forEach((element) => {
    number = element.slice(-1);
    element = element.substr(0, element.length - 1);
    tempArr.push({
      element: element,
      number: number,
    });
  });
  s = [];
  tempArr.sort((a, b) => a.number - b.number);
  tempArr.forEach((elem) => s.push(elem.element));
  return s.join(" ");
};
