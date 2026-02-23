const throttle = function (fn, delay) {
  let isThrottling = false;
  return function (...arg) {
    if (isThrottling) {
      return;
    }
    fn.apply(this, arg);
    isThrottling = true;

    setTimeout(() => {
      isThrottling = false;
    }, delay);
  };
};

function loadMoreContent() {
  console.log("Get the end of Screen...");
  const container = document.querySelector(".container");

  for (let i = 0; i < 3; i++) {
    const newBox = document.createElement("div");
    newBox.classList.add("box");
    container.appendChild(newBox);
  }
}

// document.documentElement包含关键数值：
// scrollTop: 网页上方被卷出屏幕，看不到的部分
// scrollHeight: 整个页面总高度；
// clientHeight： 屏幕总高度；
// scrollHeight >= scrollTop + scrollTop
// 当滑到底部时，等号成立

const handleScroll = () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 200) {
    loadMoreContent();
  }
};

const throttleScroll = throttle(handleScroll, 200);

window.addEventListener("scroll", throttleScroll);
