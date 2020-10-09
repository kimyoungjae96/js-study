const { log, clear } = console;
/*
기존과 달라진 ES6에서의 리스트 순회
 - for i++
 - for of



*/
const list = [1, 2, 3];
for (var i = 0; i < list.length; i++) {
  log(i);
}
const str = "123";
for (var i = 0; i < list.length; i++) {
  log(str[i]);
}
for (const a of list) {
  log(a);
}
for (const a of str) {
  log(a);
}

log("Arr --------");
const arr = [1, 2, 3];
// arr[Symbol.iterator] = null
for (const a of arr) log(a);
log("Set --------");
const set = new Set([1, 2, 3]);
// set[Symbol.iterator] = null
for (const a of set) log(a);
log("Map --------");
const map = new Map([
  ["a", 1],
  ["b", 2],
]);
for (const a of map) log(a);
for (const a of map.keys()) log(a);
for (const a of map.values()) log(a);
for (const a of map.entries()) log(a);

let iterator = arr[Symbol.iterator]();
log(iterator.next()); // {value: 1, done: false}
log(iterator.next()); // {value: 2, done: false}
log(iterator.next()); // {value: 3, done: false}
log(iterator.next()); // {value: undefined, done: true}

// 사용자 정의 이터러블

const iterable = {
  [Symbol.iterator]() {
    let i = 3;
    return {
      next() {
        return i === 0 ? { done: true } : { value: i--, done: false };
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  },
};
clear();
let iterator1 = iterable[Symbol.iterator]();
log("hihi", iterator1 === iterator1[Symbol.iterator]());
log(iterator1.next());
log(iterator1.next());
log(iterator1.next());
log(iterator1.next());
for (const a of iterable) log(a);

const arr2 = [1, 2, 3];
let iter2 = arr2[Symbol.iterator]();
log(iter2[Symbol.iterator]() === iter2); // well formed iterator

/*
전개 연산자
*/
const a = [3, 4]
a[Symbol.iterator] = null
log(...a,...[3,4],...arr,...set,...map)

