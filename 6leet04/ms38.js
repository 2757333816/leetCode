// 输入一个字符串，打印出该字符串中字符的所有排列。
// 你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。
// 示例:
// 输入：s = "abc"
// 输出：["abc","acb","bac","bca","cab","cba"]

/**
 * @param {string} s
 * @return {string[]}
 * 用一个额外数组记录元素是否被使用过代码
 */
var permutation = function(s) {
	var res = new Set();
	// new Set() ES6 数组去重
	var path = [];
	var visited = [];
	dfsHelper([...s], path, res, visited);
	return Array.from(res);
};

function dfsHelper(arr, path, res, visited) {
	if (arr.length === path.length) { //说明走到底(叶子节点)
		// s字符串的长度 === 空数组的长度
		res.add(path.join(''))
		return;
	}

	for (let i = 0; i < arr.length; i++) {
		if (visited[i]) {
			continue;
			// 仅结束本次循环
		}
		visited[i] = true;
		//进入下一层
		path.push(arr[i]);
		dfsHelper(arr, path, res, visited);
		path.pop();
		visited[i] = false;
	}

}
