//归并排序
function merge_sort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  function merge_arr(left, right) {
    var result = [];
    while (left.length && right.length) {
      left[0] > right[0] ? result.push(right.shift()) : result.push(left.shift());
    }
    return left.length > 0 ? result.concat(left) : result.concat(right);
  }
  return merge_arr(merge_sort(arr.slice(0, arr.length >> 1)), merge_sort(arr.slice(arr.length >> 1)));
}

var myArr = [3, 4, 7, 5, 8, 2, 9, 6, 1, 2, 1];
myArr = merge_sort(myArr);
console.log("result:" + myArr);