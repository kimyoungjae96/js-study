const $root = document.querySelector(".root");
let throttle = null;
let debounce = null;
let BOXNUMBER = 0;
let ROW = 10;

init = () => {
  for (let i = 1; i <= ROW; i++) {
    const $box = document.createElement("div");
    $box.classList.add("box");
    if (i === ROW) {
      $box.classList.add("last");
    }
    $box.append(document.createTextNode(`${BOXNUMBER++}`));
    $root.append($box);
  }
};

addList = () => {
  document.querySelector(".last").classList.remove("last");
  for (let i = 1; i <= ROW; i++) {
    const $box = document.createElement("div");
    $box.classList.add("box");
    if (i === ROW) {
      $box.classList.add("last");
    }
    $box.append(document.createTextNode(`${BOXNUMBER++}`));
    $root.append($box);
  }
};

addEventListener("scroll", (e) => {
  // const lastOffsetTop = document.querySelector(".last").offsetTop;
  // if (innerHeight + scrollY >= lastOffsetTop) {
  //   addList();
  // }

  // throttle
  // if (!throttle) {
  //   throttle = e.target;
  //   setTimeout(() => {
  //     throttle = null;
  //     const lastOffsetTop = document.querySelector(".last").offsetTop;
  //     if (innerHeight + scrollY >= lastOffsetTop) {
  //       addList();
  //     }
  //   }, 500);
  // }

  clearTimeout(debounce);

  debounce = setTimeout(() => {
    const lastOffsetTop = document.querySelector(".last").offsetTop;
    if (innerHeight + scrollY >= lastOffsetTop) {
      addList();
    }
  }, 500);

  // window.scrollY 스크롤의 위치
  // document.documentElement.offsetHeight html의 높이
  // document.querySelector(".root").offsetHeight root의 높이
  // document.querySelector(".last").offsetTop last의 최상단으로부터 얼마나 떨어져 있는지
  // window.innerHeight 윈도우 창 높이
});

addEventListener("load", () => {
  init();
});
