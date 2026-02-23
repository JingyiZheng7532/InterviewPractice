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

const container = document.createElement("div");
container.innerHTML = `<input type="text" id="myInput" style="width:120px; padding: 8px;" />`;
document.body.appendChild(container);

const fetchApi = (val) => {
  console.log("sending: ", val);
};

const debouncedSearch = (fetchApi, 500);
document.getElementById("myInput").addEventListener("input", (e) => {
  debouncedSearch(e.target.value);
});

/// window.open('about:blank', '_self');
// 在浏览器中打开控制台先输入window.open('about:blank', '_self');
// 跳转到空白页面之后在复制上面这段代码到控制台中
