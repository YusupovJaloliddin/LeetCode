var sumOfUnique = function (nums) {
	let hash = new Map();
	let total = 0;

	for (var i = 0; i < nums.length; i++) {
		if (hash[nums[i]]) hash[nums[i]]++;
		else hash[nums[i]] = 1;
	}

	for (const [key, value] of Object.entries(hash)) {
		if (value == 1) {
			total += Number(key);
		}
	}
	return total;
};
