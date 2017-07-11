Array.prototype.binarySearch = function(value) {
  let row = 0;
  let hight = this.length - 1;
  while (row <= hight) {
    let mid = Math.floor((row + hight) / 2);
    let element = this[mid];
    if (element < value) {
      row = mid + 1;
    } else if (element > value) {
      hight = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}
const arr = [3, 44 ,38 , 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];

console.log(arr.binarySearch(19));
