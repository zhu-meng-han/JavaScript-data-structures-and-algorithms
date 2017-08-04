function recurFib(n) {
  if (n < 3) return 1;
  return recurFib(n - 1) + recurFib(n - 2);
}

function iterFib(n) {
  if (n < 3) return 1;

  let last = 1;
  let nextLast = 1;
  let result = 1;
  for (let i = 2; i < n; ++i) {
    result = last + nextLast;
    nextLast = last;
    last = result;
  }
  return result;
}

function dynFib(n) {
  if (n < 3) return 1;

  const arr = [];
  for (let i = 0; i <= n; ++i) {
    if (i < 3) {
      arr[i] = i;
    } else {
      arr[i] = arr[i - 1] + arr[i - 2];
    }
  }
  return arr[n - 1];
}
console.time('recurFib');
recurFib(30);
console.timeEnd('recurFib');

console.time('iterFib');
iterFib(30);
console.timeEnd('iterFib');

console.time('dynFib')
dynFib(30);
console.timeEnd('dynFib');
