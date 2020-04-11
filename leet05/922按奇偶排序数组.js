// 给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。

// 对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数。

// 你可以返回任何满足上述条件的数组作为答案。

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
  let array1 = [] // 存偶数
  let array2 = [] // 存奇数
	let result = []
	// 将偶数放在新建数组array1中
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      array1.push(A[i])
    } else {
      array2.push(A[i])
    }
  }
	// 对array1遍历,将结果数组分别添加一次array1和array2
  for (let i = 0; i < array1.length; i++) {
    result.push(array1[i])
		result.push(array2[i])
  }
  return result
}