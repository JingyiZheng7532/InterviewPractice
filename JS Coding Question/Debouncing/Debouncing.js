// Higher-Order Function

const debounce = function (fn, delay) {
  let timer = null;

  return function (...args) {
    // if timer exists, clear it and restart
    if (timer) {
      clearTimeout(timer);
    }

    // set a new timer
    timer = setTimeout(() => {
      // ensure correct context and arguments
      // change this pointer and excute fn after delay
      fn.apply(this, args);
    }, delay);
  };
};
