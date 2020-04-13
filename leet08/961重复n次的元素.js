/**
 * @param {number[]} A
 * @return {number}
 * 在大小为 2N 的数组 A 中有 N+1 个不同的元素，其中有一个元素重复了 N 次。
 * 返回重复了 N 次的那个元素。
 */
var repeatedNTimes = function(A) {
     for(let i=0; i<A.length-1;i++) {
      for(let j = i+1; j<A.length; j++) {
        if(A[i] === A[j]) {
          return A[i];
        }
      }
    }
};