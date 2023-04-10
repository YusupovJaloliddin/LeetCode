/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
function findPoisonedDuration(timeSeries, duration) {
    if (timeSeries.length === 0) return 0;
    let totalDuration = 0;
    for (let i = 0; i < timeSeries.length - 1; i++) {
        totalDuration += Math.min(timeSeries[i + 1] - timeSeries[i], duration);
    }
    totalDuration += duration;
    return totalDuration;
}

const timeSeries = [1, 4, 6];
const duration = 2;
console.log(findPoisonedDuration(timeSeries, duration)); // 5
