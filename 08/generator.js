const { log, clear } = console;
function* gen() {
  yield 1;
  yield 2;
  yield 3;
  return 100; // done 일시에 출력이 된다
}

const a = gen();
log(a[Symbol.iterator]() === a);
log(a.next());
log(a.next());
log(a.next());

for (const a of gen()) log(a);

function* infinity(i = 0) {
  while (true) yield i++;
}
function* limit(l, iter) {
  for (const a of iter) {
    yield a;
    if (a === l) return;
  }
}
function* odds(l) {
  for (const a of limit(l, infinity(1))) {
    if (a % 2) yield a;
  }
}

let iter2 = odds(10);
log(iter2.next());
log(iter2.next());
log(iter2.next());
log(iter2.next());
log(iter2.next());
log(iter2.next());

for (const a of iter2) log(a);

// for of, 전개 연산자, 구조 분해, 나머지 연산자
log(...odds(10), ...odds(20));

const [head, ...tail] = odds(20);
log(head, tail);
const [c, b, ...rest] = odds(20);
log(c, b, rest);
