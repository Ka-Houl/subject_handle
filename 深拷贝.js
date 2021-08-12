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

module.exports = function clone(target) {
  if (typeof target === "object") {
    let cloneTarget = Array.isArray(target) ? [] : {}
    for (const key in target) {
      cloneTarget[key] = clone(target[key])
    }
    return cloneTarget
  } else {
    return target
  }
}
