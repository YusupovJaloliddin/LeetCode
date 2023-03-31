/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function convert(s, numRows) {
    if (numRows === 1) {
        return s;
    }
    const rows = new Array(numRows).fill("");
    let curRow = 0;
    let goingDown = false;
    for (let c of s) {
        rows[curRow] += c;
        if (curRow === 0 || curRow === numRows - 1) {
            goingDown = !goingDown;
        }
        curRow += goingDown ? 1 : -1;
    }
    return rows.join("");
}
