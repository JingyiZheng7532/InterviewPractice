const debounce = function (fn, delay) {
  let timer = null;
  return function (...arg) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, arg);
    }, delay);
  };
};

const fetchApi = function (value) {
  console.log("sending: ", value);
};

const debouncedSearch = debounce(fetchApi, 500);

const inputElement = document.getElementById("myInput");
inputElement.addEventListener("input", (e) => {
  debouncedSearch(e.target.value);
});
