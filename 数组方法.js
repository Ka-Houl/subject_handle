//forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数。
Array.prototype.forEach = function (fn) {
  var arr = this,
    len = arr.length,
    arg2 = arguments[1] || window

  for (var i = 0; i < len; i++) {
    fn.apply(arg2, [arr[i], i, arr])
  }
}

//filter() 方法返回符合一定条件的元素。
Array.prototype.filter = function (fn) {
  var arr = this,
    len = arr.length,
    arg2 = arguments[1] || window,
    nArr = [],
    nItem

  for (var i = 0; i < len; i++) {
    nItem = tools.deepClone(arr[i], {})
    fn.apply(arg2, [nItem, i, arr]) ? nArr.push(nItem) : ""
  }
  return nArr
}

//map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
Array.prototype.map = function (fn) {
  var arr = this,
    len = arr.length,
    arg2 = arguments[1] || window,
    nArr = [],
    nItem

  for (var i = 0; i < len; i++) {
    // nItem = tools.deepClone(arr[i], {})
    nArr.push(fn.apply(arg2, [arr[i], i, arr], {}))
  }

  return nArr
}

//reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
Array.prototype.reduce = function (fn, initialVal) {
  var arr = this,
    len = arr.length,
    arg2 = arguments[2] || window
  //  FIXME: 这里可能有问题，不传入初始值时候，应该是可以以第一项做初始值的
  for (var i = 0; i < len; i++) {
    initialVal = fn.apply(arg2, [initialVal, arr[i], i, arr])
  }

  return initialVal
}

HTMLCollection.prototype.jForEach = function (fn) {
  var arr = this,
    len = arr.length,
    arg2 = arguments[1] || window

  for (var i = 0; i < len; i++) {
    fn.apply(arg2, [arr[i], i, arr])
  }
}
