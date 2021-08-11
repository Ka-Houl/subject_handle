// [] https://github.com/mqyqingfeng/Blog/issues/22
/**
 *
 * - [api](https://github.com/mqyqingfeng/Blog/issues/2)
 * @param {*} func
 * @param {*} wait
 * @return {*}
 */
function debounce(func, wait) {
  var timeout
  // var context = this;
  return function () {
    var context = this
    var args = arguments

    clearTimeout(timeout)
    timeout = setTimeout(function () {
      func.apply(context, args)
    }, wait)
  }
}

// 立刻执行
// 第四版
function debounce(func, wait, immediate) {
  var timeout

  return function () {
    var context = this
    var args = arguments

    if (timeout) clearTimeout(timeout)
    if (immediate) {
      // 如果已经执行过，不再执行
      var callNow = !timeout
      timeout = setTimeout(function () {
        timeout = null
      }, wait)
      if (callNow) func.apply(context, args)
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args)
      }, wait)
    }
  }
}
