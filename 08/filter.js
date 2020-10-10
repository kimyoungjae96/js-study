const { log, clear } = console;
const products = [
  { name: "신발", price: "10000" },
  { name: "상의", price: "20000" },
  { name: "하의", price: "30000" },
  { name: "양말", price: "40000" },
  { name: "모자", price: "50000" },
];

const filter = (f, iter) => {
  let res = [];
  for (const a of iter) {
    if (f(a)) res.push(a);
  }
  return res;
};
let under30000 = [];
for (const a of products) {
  if (a.price < 30000) under30000.push(a);
}
log(...under30000);
log(...filter(({ price }) => price <= 20000, products));
