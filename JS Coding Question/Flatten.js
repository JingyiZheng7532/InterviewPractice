// Array Flatten: a process of transforming a multi-dimensional or nested array
//   into a single-dimensional array, where all the sub-array elements are moved to the top level

// example:

const arr = [1, [2, [3, 4]]];
console.log(arr.flat(1)); // [1, 2, [3, 4]] flat one layer
console.log(arr.flat(Infinity)); // flat all layer

// 手写
// 1 => recursion
const flatten1 = function (arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten1(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
};

// 2 => use reduce
function flatten2(arr) {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten2(cur) : cur);
  }, []);
}
