const a = async () => {
  try {
    // 비동기 함수인 b와 c를 호출하는데 위의 결과를 기다리지 않고 아래의 결과를 기다리는 법
    // console.log(await b());
    // console.log(await c());
    let [d, e] = await Promise.all([b(), c()]);
    console.log("d,e", d, e);
  } catch (e) {
    alert(e);
  }
};
const b = async () => {
  const a = await fetch("http://localhost:3000/TimeOut50001");
  return a;
};

const c = async () => {
  const a = await fetch("http://localhost:3000/TimeOut5000");
  return a;
};

a();

const d = async () => {
  try {
    // 비동기 함수인 b와 c를 호출하는데 위의 결과를 기다리지 않고 아래의 결과를 기다리는 법
    await e();
  } catch (e) {
    alert("엥", e);
  }
};
const e = async () => {
  try {
    throw new fnCustomError({ name: "hihi", message: "1111hihihi" });
    return a;
  } catch (e) {
    console.log(e);
    alert(e);
    alert(e.name + e.message);
  }
};

class customError extends Error {
  constructor({ name, message }) {
    super(message);
    this.name = name;
  }
}
function fnCustomError({ name, message }) {
  this.name = name;
  this.message = message;
}

d();
