const { log, clear } = console;
const products = [
  { name: "신발", price: "10000" },
  { name: "상의", price: "20000" },
  { name: "하의", price: "30000" },
  { name: "양말", price: "40000" },
  { name: "모자", price: "50000" },
];

//map
const map = (f, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(f(a)); //추상화를 하기 위해 함수로 한번 더 감싸줌
  }
  return res;
};

let names = [];
let prices = [];
for (const a of products) {
  names.push(a.name);
}
log(map((p) => p.name, products));
for (const a of products) {
  prices.push(a.price);
}
log(map((p) => p.price, products));
log(names);
log(prices);

//이터러블 프로토콜을 따른 map의 다형성
function* gen() {
  yield 1;
  yield 2;
  yield 4;
}

log(map((a) => a * a, gen()));

let m = new Map();
m.set("a", 10);
m.set("b", 20);
log(new Map(map(([key, value]) => [key, value * 2], m)));
