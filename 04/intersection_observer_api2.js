let boxElement = [];
let prevRatio = 0;
const createObserver = () => {
  let observer;
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };
  boxElement.forEach((box) => {
    observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(box);
  });
};
const handleIntersect = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      console.log("intersecting!!");
    }
  });
};
addEventListener("load", () => {
  const _boxElement = document.querySelectorAll(".box");
  _boxElement.forEach((box) => {
    boxElement.push(box);
  });
  createObserver();
});
