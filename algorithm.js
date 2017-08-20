//深拷贝
function deep_copy(obj) {
  if (typeof obj !== "object" && typeof obj !== "function") {
    return obj;
  }
  if (obj == null) {
    return obj;
  }
  if (typeof obj === "function") {
    return obj.bind(null);
  }
  var newObj = obj instanceof Array ? [] : {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deep_copy(obj[key]);
    }
  }
  return newObj;
}
var obj = {
  a: 1,
  b: "s",
  c: false,
  d: null,
  e: undefined,
  f: [1, 2, 3],
  g: {
    g1: 1
  },
  h: function () {
    console.log("123");
  }
};
var newObj = deep_copy(obj);
console.log(newObj);
newObj.g == obj.g;

//冒泡排序
function bubble_sort(arr) {
  function swap(i, j, arr) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  var isSwap;
  for (var i = 1; i < arr.length; i++) {
    isSwap = false;
    for (var j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1, arr);
        isSwap = true;
      }
    }
    if (!isSwap) {
      break;
    }
  }
}
var myArr = [3, 4, 7, 5, 8, 2, 9, 5, 1, 2, 5];
bubble_sort(myArr);
console.log(myArr);

//插入排序
function insert_sort(arr) {
  function swap(i, j, arr) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  for (var i = 1; i < arr.length; i++) {
    for (var j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        swap(j, j - 1, arr);
      } else {
        break;
      }
    }
  }
}
var myArr = [3, 4, 7, 5, 8, 2, 9, 5, 1, 2, 5];
insert_sort(myArr);
console.log(myArr);

//快速排序
function fast_sort(min, max, arr) {
  if (min >= max) {
    return;
  }
  var _min = min;
  for (var i = min; i <= max; i++) {
    if (arr[_min] > arr[i]) {
      var temp = arr[i]
      for (var j = i - 1; j >= _min; j--) {
        arr[j + 1] = arr[j];
      }
      arr[_min] = temp;
      _min++;
    }
  }
  fast_sort(min, _min - 1, arr);
  fast_sort(_min + 1, max, arr);
}

function swap(i, j, arr) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

var myArr = [3, 4, 7, 5, 8, 2, 9, 5, 8, 2, 5];
fast_sort(0, myArr.length - 1, myArr);
console.log(myArr);

//选择排序
function select_sort(arr) {
  function swap(i, j, arr) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  var max = 0;
  for (var i = 0; i < arr.length; i++) {
    max = 0;
    for (var j = 0; j < arr.length - i; j++) {
      if (arr[max] < arr[j]) {
        max = j;
      }
    }
    swap(max, arr.length - 1 - i, arr);
  }
}
var myArr = [3, 4, 7, 5, 8, 2, 9, 6, 1, 2, 5];
select_sort(myArr);
console.log(myArr);

//希尔排序，也称缩小增量排序，将数组拆分为若干个子分组, 每个分组由相距一定"增量"的元素组成，然后对分组进行直接插入排序

function direct_insert_sort(arr, gap) {
  function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  for (var i = 0; i < gap; i++) {
    for (var j = i + gap; j < arr.length; j = j + gap) {
      for (var k = j; k > 0; k = k - gap) {
        if (arr[k] < arr[k - gap]) {
          swap(arr, k, k - gap);
        } else {
          break;
        }
      }
    }
  }
  console.log(arr);
}

function shell_sort(arr) {
  for (var i = arr.length >> 1; i > 0; i--) {
    direct_insert_sort(arr, i);
  }
}
var myArr = [3, 4, 7, 5, 8, 2, 9, 6, 1, 2, 5];
shell_sort(myArr);
console.log("result:" + myArr);

//归并排序、将数组拆分为两个子数组, 分别排序, 最后才将两个子数组合并; 拆分的两个子数组, 再继续递归拆分为更小的子数组, 进而分别排序, 直到数组长度为1, 直接返回该数组为止.
//平均时间复杂度：O(nlog₂n)
//最好情况: O(nlog₂n)
//空间复杂度: O(n)
function merge(left, right) {
  var result = [];
  while (left.length > 0 && right.length > 0) {
    var little = left[0] > right[0] ? right.shift() : left.shift();
    result.push(little);
  }
  return result.concat(left.length ? left : right);
}

function merge_sort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  var m = arr.length >> 1;
  var left = arr.slice(0, m);
  var right = arr.slice(m);
  return merge(merge_sort(left), merge_sort(right));
}
var myArr = [3, 4, 7, 5, 8, 2, 9, 6, 1, 2, 5];

myArr = merge_sort(myArr);
console.log(myArr);