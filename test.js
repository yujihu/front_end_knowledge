//堆排序
function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

//建大根堆
function heap_build(arr, heap, length) {
  var left = heap * 2 + 1,
    right = heap * 2 + 2;
  if (left < length && arr[left] > arr[heap]) {
    swap(arr, left, heap);
    heap_build(arr, left, length);
  }
  if (right < length && arr[right] > arr[heap]) {
    swap(arr, right, heap);
    heap_build(arr, right, length);
  }
  console.log(arr);
}

function heap_sort(arr) {
  var length = arr.length;
  for (var i = length >> 1; i >= 0; i--) {
    heap_build(arr, i, length);
  }
  for (var j = length - 1; j > 0; j--) {
    swap(arr, 0, j);
    console.log("after swap:", arr);
    heap_build(arr, 0, j);
  }
}

var myArr = [8, 2, 6, 4, 7, 9, 1, 4, 3, 5];
heap_sort(myArr);
console.log(myArr);