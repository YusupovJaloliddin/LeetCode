const missingNumber = (nums) => {
	let len = nums.length;
	if(len===0) return 0;
	
	result = 0;
	for (let i=0; i<len; i++) {
		result += nums[i] - i;
	}
	return len - result;
};
