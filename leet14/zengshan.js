// - unshift:向数组的开头添加一个或更多元素，并返回新的长度【原数组会发生变化】
var user1 = ['张三', '李四'];
user1.unshift('王五');
console.log(user1);
// ["王五","张三","李四"]

// - push:向数组的末尾添加一个或更多元素，并返回新的长度 【原数组会发生变化】 
var user2 = ['张三', '李四'];
user2.push('王五');
console.log(user2);
// ["张三","李四","王五"]

// - shift:删除并返回数组的第一个元素【原数组会发生变化】
var user3 = ['张三', '李四'];
user3.shift();
console.log(user3);
// ["李四"]

// - pop: 删除并返回数组的最后一个元素 【原数组会发生变化】
var user4 = ['张三', '李四'];
user4.pop();
console.log(user4);
// ["张三"]
