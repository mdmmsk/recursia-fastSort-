let array = [11, 12, 4, 5, 23, 87, 12, 5];
let counter = 0;
let fastSort = function (input) {
	counter += 1;
	if (input.length <= 1) {
		return input;
	} else {
		let middleElementindex = Math.ceil((input.length - 1) / 2);
		let middleElement = input[middleElementindex];
		input.splice(middleElementindex, 1);
		let less = [];
		let more = [];
		input.forEach(item => {
			if (item <= middleElement) {
				less.push(item);
			} else {
				more.push(item);
			}
		})
		return [...fastSort(less), middleElement, ...fastSort(more)];
	}
};
console.log(fastSort(array));
console.log(counter);