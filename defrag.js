const defrag = (arr, orderObj) => {
	
	const state = {}; 
	
	return arr.reduce((acc, item, index) => {

		state[item] = +(state[item] === undefined) + (state[item]+1 || 0);
		let position = 0;

		if (orderObj.findIndex((ordItem) => {
			position += state[ordItem] || 0;
			return ordItem === item;
		}) >= 0) {
			acc.splice(position-1, 0, item);
		}
		else {
			acc.push(item);
		}
		return acc;
	}, []);
}

console.log("defrag([3,4,5,3,3,2,1,3,5,34,6,7,3,5,21,2,3,2,1], [2, 3, 1]) => ", defrag([3,4,5,3,3,2,1,3,5,34,6,7,3,5,21,2,3,2,1], [2, 3, 1]));
console.log("defrag([3,4,5,3,3,2,1,3,5,34,6,7,3,5,21,2,3,2,1], [2, 3, 1, 5]) => ", defrag([3,4,5,3,3,2,1,3,5,34,6,7,3,5,21,2,3,2,1], [2, 3, 1, 5]));
console.log("defrag([3,4,5,3,3,2,1,3,5,34,6,7,3,5,21,2,3,2,1], [5, 2, 3, 1]) => ", defrag([3,4,5,3,3,2,1,3,5,34,6,7,3,5,21,2,3,2,1], [5, 2, 3, 1]));
console.log("defrag([3,4,5,3,3,2,1,3,5,34,6,7,3,5,21,2,3,2,1], []) => ", defrag([3,4,5,3,3,2,1,3,5,34,6,7,3,5,21,2,3,2,1], []));
