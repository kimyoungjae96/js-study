let axiosRes = null;
const source = axios.CancelToken.source();
const axiosTimeout5000 = async () => {
  try {
    axiosRes = await axios("http://localhost:3000/TimeOut5000", {
      cancelToken: source.token,
    });
  } catch (e) {
    console.log(e);
    alert(e);
    if (axios.isCancel(e)) {
      console.log("Request canceled", e.message);
    } else {
      // handle error
    }
  }
  console.log(axiosRes);
};

addEventListener("load", () => {
  const abortButton = document.createElement("button");
  abortButton.append("axios abort");
  abortButton.addEventListener("click", () => {
    source.cancel("abort press");
  });
  document.body.append(abortButton);
});

axiosTimeout5000();
