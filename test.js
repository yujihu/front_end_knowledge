//快速排序
function quick_sort(arr, min, max) {
  if (min >= max) {
    return;
  }
  var index = min;
  for (var i = min + 1; i < max + 1; i++) {
    if (arr[index] > arr[i]) {
      var temp = arr[i];
      for (var j = i - 1; j >= index; j--) {
        arr[j + 1] = arr[j];
      }
      arr[index] = temp;
      index++;
    }
  }
  quick_sort(arr, 0, index - 1);
  quick_sort(arr, index + 1, max);
}

var myArr = [3, 4, 7, 5, 8, 2, 9, 6, 1, 2, 5];
quick_sort(myArr, 0, myArr.length - 1);
console.log("result:" + myArr);