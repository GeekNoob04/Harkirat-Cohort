const input = [1, 2, 3, 4, 5];

// GOAL:  find o/p to be input*2

// function trans(i) {
//   return i * 2;
// }
// const ans = input.map(trans);
// console.log(ans);

// or

const ans = input.map((i) => {
  return i * 2;
});
console.log(ans);

// filtering:

// normal way:

const arr = [2, 3, 4, 5, 6];

const newarr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    newarr.push(arr[i]);
  }
}
console.log(newarr);

// filter func:

const res = arr.filter((n) => {
  if (n % 2 == 0) {
    return true;
  }
  return false;
});
console.log(res);

// assignment:

const customMap = (arr, fn) => {
  const newMap = [];
  for (let i = 0; i < arr.length; i++) {
    newMap.push(fn[arr[i]]);
  }
  return newMap;
};
