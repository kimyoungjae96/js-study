let controller = new AbortController();
let signal = controller.signal;
let res = null;
const timeout5000 = async () => {
  try {
    res = await fetch("http://localhost:3000/TimeOut5000", { signal });
  } catch (e) {
    alert(e);
  }
  console.log(res);
};

addEventListener("load", () => {
  const abortButton = document.createElement("button");
  abortButton.append("abort");
  abortButton.addEventListener("click", () => {
    controller.abort();
  });
  document.body.append(abortButton);
});

timeout5000();
