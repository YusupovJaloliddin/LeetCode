/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  // Hash yordamida harflarni saqlash uchun bo'sh obyektni yaratamiz
  const charSet = {};
  let maxLength = 0;
  let left = 0;

  // s ni uzunligi bo'yicha martaqib o'tamiz
  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];
    const previousOccurrence = charSet[currentChar];

    // Agar hozirgi harf avvaldan ko'rsatilgan bo'lsa, left indexni bir ozgina ko'taramiz
    // Har bir harfni hash yordamida saqlash orqali, o'ziga xos indeksini aniqlaymiz
    if (previousOccurrence >= left && previousOccurrence !== undefined) {
      left = previousOccurrence + 1;
    }

    // Har bir harfni hash yordamida saqlash orqali, o'ziga xos indeksini aniqlaymiz
    charSet[currentChar] = right;
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}
