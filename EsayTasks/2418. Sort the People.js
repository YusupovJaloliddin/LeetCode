/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
      let tempArr = [];
  for (let i = 0; i < names.length; i++) {
    tempArr.push({
      name: names[i],
      height: heights[i],
    });
  }
  tempArr = tempArr.sort((a, b) => b.height - a.height);
  names = [];
  tempArr.forEach((element) => {
    names.push(element.name);
  });
  return names;
};
