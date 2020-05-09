// 给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。
// 找到所有在 [1, n] 范围之间没有出现在数组中的数字。给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。

// 找到所有在 [1, n] 范围之间没有出现在数组中的数字。
// 输入:
// [4,3,2,7,8,2,3,1]
// 输出:
// [5,6]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
let res = [];
    for(let i=1; i <= nums.length; i++){
        if(nums.indexOf(i) === -1){
            res.push(i)
        }
    }    
    return res
};