/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
	var cj = []
	for(var i=0;i<nums.length;i++){
		var n = nums[i]*nums[i+1]
		cj.push(n)
		return cj.sort().reverse()[0]
	}
	
};

