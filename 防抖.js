// [] https://github.com/mqyqingfeng/Blog/issues/22
/**
 *
 * - [api](https://github.com/mqyqingfeng/Blog/issues/2)
 * @param {*} func
 * @param {*} wait
 * @return {*}
 */
function debounce(func, wait) {
  var timeout;

  return function () {
      var context = this;
      var args = arguments;

      clearTimeout(timeout)
      timeout = setTimeout(function(){
          func.apply(context, args)
      }, wait);
  }
}
