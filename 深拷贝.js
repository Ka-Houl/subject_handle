// 不够完善: deepClone('')  => { }
function deepClone(org, tar) {
  var tar = tar || {}
  var toStr = Object.prototype.toString
  var arrType = "[object Array]"
  for (var key in org) {
    if (org.hasOwnProperty(key)) {
      if (typeof org[key] === "object" && org[key] !== null) {
        tar[key] = toStr.call(org[key]) === arrType ? [] : {}
        deepClone(org[key], tar[key])
      } else {
        tar[key] = org[key]
      }
    }
  }
  return tar
}

/**
 * 考虑循环引用问题，使用WeakMap做弱引用
 * - [docs](https://cloud.tencent.com/developer/article/1497418)
 * - [Object.prototype.toString](https://ask.qcloudimg.com/http-save/yehe-3713434/nb0dwyns7q.jpeg?imageView2/2/w/1620)
 * @param {*} target
 * @param {*} [map=new WeakMap()]
 * @return {*}
 */
function clone(target, map = new WeakMap()) {
  if (typeof target === "object") {
    let cloneTarget = Array.isArray(target) ? [] : {}
    if (map.get(target)) {
      return target
    }
    map.set(target, cloneTarget)
    for (const key in target) {
      cloneTarget[key] = clone(target[key], map)
    }
    return cloneTarget
  } else {
    return target
  }
}
