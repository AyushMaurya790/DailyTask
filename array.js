// simple array 
const arr = [1, 2, 3, 2, 4, 1, 5];

const unique = [...new Set(arr)];

console.log(unique); 
// [1, 2, 3, 4, 5]
