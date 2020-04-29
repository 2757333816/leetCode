/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
	if (nums.length == 1) return nums[0]
	let map = {},result
	for (let i = 0,len=nums.length; i < len; i++) {
		if(map.hasOwnProperty(nums[i])){
			map[nums[i]]++
			if(map[nums[i]]>len/2){
				result=nums[i]
			}else{
				map[nums[i]]=1
			}
		}
	}
	return result
};
