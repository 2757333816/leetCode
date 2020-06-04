var merge = function(A, m, B, n) {
	let i = m - 1,
		j = n - 1,
		p = m + n - 1;
	//i:A的下标   j:B的下标    p:合成后新数组的下标

	while (i >= 0 || j >= 0) {
		//满足 i>=0 或 j>=0
		let l = i >= 0 ? A[i] : -Infinity,
			// 满足条件 l=A[i],否则-无穷
			r = j >= 0 ? B[j] : -Infinity;

		if (l > r) {
			// A[i]>B[j]
			A[p] = l;
			console.log(A[p] + 'A[p]=L')
			i--;
		} else {
			A[p] = r;
			console.log(A[p] + 'A[p]=R')
			j--;
		}
		console.log(A + 'A')

		p--;
	}

	return A;
};
