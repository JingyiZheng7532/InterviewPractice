// Curry: It is a technique where a function with multiple arguments can be
//        transformed into a series of function that each take a single argument

// Why we need this technique?
// It allows us to pre-fill some arguments of a function and reuse that "partially filled" version later;

// Traditional function
const sum = (a, b, c) => a + b + c;

// Curried version
const curriedSum = function (a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
};

// curried version in arrow function
const curriedSumArrow = (a) => (b) => (c) => a + b + c;

const myCurry = function (fn) {
  // 返回一个接收参数的新函数
  return function curried(...args) {
    // fn.length => js的内置属性，函数定义的时候形参的个数
    if (args.length >= fn.length) {
      // 如果参数已经齐全，直接执行原函数
      return fn.apply(this, args);
    } else {
      return function (...nextArgs) {
        // 递归调用curried, 把之前的参数和现在的参数合并
        return curried.apply(this, [...args, ...nextArgs]);
      };
    }
  };
};

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1)(2, 3)); // 6
