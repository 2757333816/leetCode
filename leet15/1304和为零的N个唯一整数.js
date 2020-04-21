// 给你一个整数 n，请你返回 任意 一个由 n 个 各不相同 的整数组成的数组，并且这 n 个数相加和为 0 
// 示例 1：
// 输入：n = 5
// 输出：[-7,-1,1,3,4]
// 解释：这些数组也是正确的 [-5,-1,1,2,3]，[-3,-1,2,-2,4]。

/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let res = [];//存返回的数组
    if(n%2 ===0){//偶数个数字
      let num = n/2
      for(let i=1;i<num+1;i++){
         res.push(i);//加一个正数一个负数 = 0
         res.push(-i);
      }
    }else{//奇数个数字
     let nums = (n-1)/2;
     res.push(0)
     for(let j=1;j<nums+1;j++){
        res.push(j);
        res.push(-j)
     }
    }
    return res;
};