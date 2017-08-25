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

//进制转换
function convert(from, to, initial) {
  var chars = "0123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ",
    initial = String(initial),
    number_ten = 0;
  //先将from进制的数字转化为十进制
  //以二进制数1010为例，转化为十进制：0*2^0 + 1*2^1 + 0*2^2 + 1*2^3 = 10
  for (var i = 0; i < initial.length; i++) {
    number_ten += Math.pow(from, i) * chars.indexOf(initial.charAt(initial.length - i - 1));
  }
  //然后将十进制的数字转化为to进制
  //以十进制数10为例，转化为2进制：10/2商5余0，5/2商2余1，2/2商1余0，1/2商0余1，故最终结果为1010
  var result_to = [];
  var mod = 0;
  do {
    mod = number_ten % to;
    number_ten = (number_ten - mod) / to;
    result_to.unshift(chars.split("")[mod]);
  } while (number_ten);
  return result_to.join("");
}
console.log(convert(10, 32, 1010000));

//函数节流：在指定时间间隔内只执行一次函数，可以理解为在函数首次触发间隔指定时间再执行
function throttle(fn, interval = 100) {
  var canRun = true;
  return function () {
    if (!canRun) {
      return;
    }
    canRun = false;
    fn.apply(this, arguments);
    setTimeout(() => {
      canRun = true;
    }, interval);
  }
}

//函数防抖，只有触发的时间间隔超过一定的时间才执行函数，可以理解为函数最后触发间隔指定时间再执行
function debounce(fn, interval = 100) {
  var timer = null;
  return function name(params) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, interval);
  }
}

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

//直接插入排序
/**
 * 排序类型      平均情况    最好情况    最坏情况	    辅助空间    稳定性
 * 直接插入排序   O(n²)	     O(n)	      O(n²)        O(1)       稳定
 */
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
/**
 * 排序类型    平均情况    最好情况    最坏情况    辅助空间    稳定性
 * 快速排序    O(nlog₂n)   O(nlog₂n)  O(n²)      O(nlog₂n)  不稳定
 */
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
/**
 * 排序类型    平均情况    最好情况    最坏情况    辅助空间    稳定性
 * 选择排序     O(n²)      O(n²)      O(n²)      O(1)       不稳定
 */
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
/**
 * 排序类型    平均情况    最好情况    最坏情况    辅助空间    稳定性
 * 希尔排序     O(n^1.3)   O(nlogn)   O(n²)      O(1)       不稳定
 */
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
/**
 * 排序类型    平均情况    最好情况    最坏情况    辅助空间    稳定性
 * 归并排序     O(nlog₂n)  O(nlog₂n)  O(nlog₂n)  O(n)       稳定
 */
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

//堆排序，大根堆要求每个子节点的值都不大于其父节点的值（最大值在堆顶），小根堆每个子节点的值都不小于其父节点的值
function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function heapAdjust(arr, i, length) { //堆调整
  var left = 2 * i + 1,
    right = 2 * i + 2,
    largest = i;
  if (left < length && arr[left] > arr[largest]) {
    largest = left;
    swap(arr, i, left);
    heapAdjust(arr, left, length);
  }
  if (right < length && arr[right] > arr[largest]) {
    largest = right;
    swap(arr, i, right);
    heapAdjust(arr, right, length);
  }
}

function heap_sort(arr) {
  //建大顶堆
  var length = arr.length;
  for (var i = arr.length >> 1; i >= 0; i--) {
    heapAdjust(arr, i, arr.length);
  }
  for (var j = arr.length - 1; j > 0; j--) {
    swap(arr, 0, j);
    heapAdjust(arr, 0, --length);//堆调整
  }
}
var myArr = [3, 4, 7, 5, 8, 2, 9, 6, 1, 2, 5];

heap_sort(myArr);
console.log(myArr);