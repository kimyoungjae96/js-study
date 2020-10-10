const { map } = require("./map");
const { reduce } = require("./reduce.js");
const { filter } = require("./filter.js");

const { log, clear } = console;

const products = [
  { name: "신발", price: 10000 },
  { name: "상의", price: 20000 },
  { name: "하의", price: 30000 },
  { name: "양말", price: 40000 },
  { name: "모자", price: 50000 },
];

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
