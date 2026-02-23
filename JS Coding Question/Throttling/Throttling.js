const throttling = function (fn, delay) {
  let isThrottlting = false;

  return function (...arg) {
    if (isThrottlting) {
      return;
    }
    fn.apply(this, arg);
    isThrottlting = true;

    setTimeout(() => {
      isThrottlting = false;
    }, delay);
  };
};
