/**
 *  - [api doc](github.com/mqyqingfeng/Blog/issues/42)
 */
function curry2(fn, args) {
  var length = fn.length

  args = args || []

  return function () {
    var _args = args.slice(0),
      arg,
      i

    for (i = 0; i < arguments.length; i++) {
      arg = arguments[i]

      _args.push(arg)
    }
    if (_args.length < length) {
      return curry.call(this, fn, _args)
    } else {
      return fn.apply(this, _args)
    }
  }
}

function curry(fun, ...args) {
  let len = fun.length
  args = args || []
  let _args = [].slice.call(args)
  return function () {
    console.log("this", this, 1)
    _args.push(...arguments)
    if (len > _args.length) {
      return curry.call(this, fun, ..._args)
    } else {
      return fun.call(this, ..._args)
    }
  }
}

var fn = curry(function (a, b, c) {
  console.log("curry", this)
  console.log(a + b + c)
})

var obj = {
  value: 1,
  fn: fn,
}

fn(1)(2)(3)
