function objectFactory(construct, ...args) {
  let obj = Object.create(null)
  obj.__proto__ = construct.prototype
  let ret = construct.apply(obj, args)
  // 返回的值是不是一个对象，如果是一个对象，我们就返回这个对象，如果没有，我们该返回什么就返回什么。
  return typeof ret === "object" ? ret : obj
}

function Otaku(name, age) {
  this.strength = 60
  this.age = age

  return {
    name: name,
    habit: "Games",
  }
}

var person = objectFactory(Otaku, "Kevin", "18")

console.log(person.name) // Kevin
console.log(person.habit) // Games
console.log(person.strength) // undefined
console.log(person.age) // undefined
