// at array

// Polyfill for Array.prototype.at (supports negative indices)
if (!Array.prototype.at) {
	Object.defineProperty(Array.prototype, 'at', {
		value: function(n) {
			const len = this.length >>> 0;
			if (len === 0) return undefined;
			const index = Math.trunc(n) || 0;
			const k = index < 0 ? len + index : index;
			return (k >= 0 && k < len) ? this[k] : undefined;
		},
		configurable: true,
		writable: true,
	});
}

// Examples
const arr = [10, 20, 30, 40, 50];
console.log(arr.at(0));   // 10
console.log(arr.at(2));   // 30
console.log(arr.at(-1));  // 50
console.log(arr.at(-3));  // 30
console.log([].at(0));    // undefined

// Works for strings via String.prototype.at in modern runtimes,
// but this file focuses on arrays.