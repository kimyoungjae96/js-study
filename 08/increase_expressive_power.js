// const { map } = require("./map");
// const { reduce } = require("./reduce.js");
// const { filter } = require("./filter.js");
const { map, reduce, filter } = require("./fx.js");

const { log, clear } = console;

const products = [
  { name: "신발", price: 10000 },
  { name: "상의", price: 20000 },
  { name: "하의", price: 30000 },
  { name: "양말", price: 40000 },
  { name: "모자", price: 50000 },
];

const go = (...args) => {
  return reduce((a, f) => f(a), args);
};
//const pipe = (...fs) => (a) => go(a, ...fs);
const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs); //인자 두개 받기 위해 바꾼 문장
clear();
go(
  0,
  (a) => a + 1,
  (a) => a + 10,
  (a) => a + 100,
  log
);

const f = pipe(
  (a, b) => a + b,
  (a) => a + 10,
  (a) => a + 100
);
log(f(1, 2));

const add = (a, b) => a + b;
log(
  reduce(
    add,
    map(
      (p) => p.price,
      filter((p) => p.price < 30000, products)
    )
  )
);

go(
  products,
  (products) => filter((p) => p.price <= 20000, products),
  (products) => map((p) => p.price, products),
  (prices) => reduce(add, prices),
  log
);

// curry
const curry = (f) => (a, ..._) =>
  _.length ? f(a, ..._) : (..._) => f(a, ..._);

const mult = curry((a, b) => a * b);
log(mult(1)(2));

const total_price = pipe(
  map((p) => p.price),
  reduce(add)
);

const base_total_price = (predi) => pipe(filter(predi), total_price);
go(
  products,
  (products) => filter((p) => p.price <= 30000)(products),
  (products) => map((p) => p.price)(products),
  (prices) => reduce(add)(prices),
  log
);

// 더 깔끔하게 만들기
go(
  products,
  base_total_price((p) => p.price <= 30000),
  log
);
