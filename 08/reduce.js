const { log, clear } = console;

const products = [
  { name: "신발", price: 10000 },
  { name: "상의", price: 20000 },
  { name: "하의", price: 30000 },
  { name: "양말", price: 40000 },
  { name: "모자", price: 50000 },
];

const nums = [1, 2, 3, 4, 5];
let total = 0;
for (const n of nums) {
  total += n;
}
log(total);

const add = (a, b) => a + b;
const reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
};
log(reduce(add, 0, [1, 2, 3, 4, 5])); // 15
log(reduce(add, [1, 2, 3, 4, 5])); // 15
log(add(add(add(add(add(0, 1), 2), 3), 4), 5)); // 15
log(reduce((totalPrice, product) => totalPrice + product.price, 0, products));
module.exports = { reduce };
