var isHappy = function(n) {
	// String()和toString()都是将其他类型的变量转换为字符串类型。 
	// toString()无法转换null和undefined
	let strList = String(n).split('')
	console.log('strList', strList)
	let sq = []
	return isOne(strList, sq)
};
var isOne = function(arr, sq) {
	let result = 0
	for (let i = 0; i < arr.length; i++) {
		console.log('arr[i]', arr, arr[i])
		result += Math.pow(Number(arr[i]), 2)

	}
	console.log('result', result)
	if (result == 1) {
		return true
	}
	if (sq.indexOf(result) > -1) {
		return false
	} else {
		sq.push(result)
	}
	console.log(sq)
	return isOne(String(result).split(''), sq)
}
console.log(isHappy(19))
