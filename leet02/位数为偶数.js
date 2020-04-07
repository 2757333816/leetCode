/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    // 返回位数为偶数的个数 ret
    let ret = 0;
    for (let i =0; i < nums.length; i++) {
      if(nums[i].toString().length % 2 === 0 ) {
				ret++
			}
    }
    return ret;
};