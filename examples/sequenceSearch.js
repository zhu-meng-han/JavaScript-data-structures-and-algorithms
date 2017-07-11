
Array.prototype.sequenceSearch = function(value) {
  const len = this.length;
  for (let i = 0; i < len; ++i) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

const arr = [3, 44 , 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];

console.log(arr.sequenceSearch(47));
