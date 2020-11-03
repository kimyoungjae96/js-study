var debounce = null;
var throttle = null;

document.querySelector('#search').addEventListener('keyup',keyUpFn)

function keyUpFn(el) {
  // normal
  console.log("normal", el.target.value, new Date().getTime());

  // debounce
  clearTimeout(debounce);
  debounce = setTimeout(() => {
    console.log("debounce", el.target.value, new Date().getTime());
  }, 500);

  // throttle
  if (!throttle) {
    setTimeout(() => {
      console.log("throttle", throttle, new Date().getTime());
      throttle = null;
    }, 500);
  }
  throttle = el.target.value;
}
