// 682. Baseball Game

/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  let newArr = [];
  for (let i = 0; i < operations.length; i++) {
    switch (operations[i]) {
      case "D":
        {
          newArr.push(newArr[newArr.length - 1] * 2);
        }
        break;
      case "C":
        {
          newArr.pop();
        }
        break;
      case "+":
        {
          newArr.push(
            Number(newArr[newArr.length - 1]) +
              Number(newArr[newArr.length - 2])
          );
        }
        break;
      default:
        {
          newArr.push(Number(operations[i]));
        }
        break;
    }
  }
  console.log(newArr);
  let s = 0;
  newArr.forEach((elem) => {
    s += elem;
  });
  return s;
};

console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));
