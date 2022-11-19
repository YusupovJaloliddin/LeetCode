/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function (cards) {
  let karta = {};
  let natija = Infinity;
  for (let i = 0; i < cards.length; i++) {
    if (!(cards[i] in karta)) {
      karta[cards[i]] = i;
    } else {
      const temp = i - karta[cards[i]] + 1;
      natija = Math.min(natija, temp);
      karta[cards[i]] = i;
    }
  }
  return natija === Infinity ? -1 : natija;
};
