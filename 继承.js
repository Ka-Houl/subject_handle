// - [doc](https://github.com/mqyqingfeng/Blog/issues/16)

/**
 * ----------------------------------------------------------------------
 * 原型链继承
 * - [doc](https://github.com/mqyqingfeng/Blog/issues/16)
 * - 问题：1.引用类型的属性被所有实例共享；2.在创建 Child 的实例时，不能向Parent传参
 */
function Parent() {
  this.names = ["kevin", "daisy"]
}

function Child() {}

Child.prototype = new Parent()

var child1 = new Child()

child1.names.push("yayu")

console.log(child1.names) // ["kevin", "daisy", "yayu"]

var child2 = new Child()

console.log(child2.names) // ["kevin", "daisy", "yayu"]

/**
 * ----------------------------------------------------------------------
 * 借用构造函数(经典继承)
 * - [doc](https://github.com/mqyqingfeng/Blog/issues/16)
 * - 优点：1.避免了引用类型的属性被所有实例共享；2.可以在 Child 中向 Parent 传参
 * - 缺点：1.方法都在构造函数中定义，每次创建实例都会创建一遍方法。
 */

function Parent() {
  this.names = ["kevin", "daisy"]
}

function Child() {
  Parent.call(this)
}

var child1 = new Child()

child1.names.push("yayu")

console.log(child1.names) // ["kevin", "daisy", "yayu"]

var child2 = new Child()

console.log(child2.names) // ["kevin", "daisy"]

/**
 * ----------------------------------------------------------------------
 * 组合继承
 * - [doc](https://github.com/mqyqingfeng/Blog/issues/16)
 * - 优点：融合原型链继承和构造函数的优点，是 JavaScript 中最常用的继承模式。
 */

function Parent(name) {
  this.name = name
  this.colors = ["red", "blue", "green"]
}

Parent.prototype.getName = function () {
  console.log(this.name)
}

function Child(name, age) {
  Parent.call(this, name)

  this.age = age
}

Child.prototype = new Parent()
Child.prototype.constructor = Child

var child1 = new Child("kevin", "18")

child1.colors.push("black")

console.log(child1.name) // kevin
console.log(child1.age) // 18
console.log(child1.colors) // ["red", "blue", "green", "black"]

var child2 = new Child("daisy", "20")

console.log(child2.name) // daisy
console.log(child2.age) // 20
console.log(child2.colors) // ["red", "blue", "green"]

/**
 * ----------------------------------------------------------------------
 * 4 原型式继承
 * - [doc](https://github.com/mqyqingfeng/Blog/issues/16)
 * - 缺点：包含引用类型的属性值始终都会共享相应的值，这点跟原型链继承一样。
 */

function createObj(o) {
  function F() {}
  F.prototype = o
  return new F()
}

/**
 * ----------------------------------------------------------------------
 * 5 寄生式继承
 * - [doc](https://github.com/mqyqingfeng/Blog/issues/16)
 * - 缺点：跟借用构造函数模式一样，每次创建对象都会创建一遍方法。
 */
function createObj(o) {
  var clone = Object.create(o)
  clone.sayName = function () {
    console.log("hi")
  }
  return clone
}

/**
 * ----------------------------------------------------------------------
 * 6 寄生组合式继承
 * - [doc](https://github.com/mqyqingfeng/Blog/issues/16)
 * - 这种方式的高效率体现它只调用了一次 Parent 构造函数，并且因此避免了在 Parent.prototype 上面创建不必要的、多余的属性。与此同时，原型链还能保持不变；因此，还能够正常使用 instanceof 和 isPrototypeOf。开发人员普遍认为寄生组合式继承是引用类型最理想的继承范式。
 */

function Parent(name) {
  this.name = name
  this.colors = ["red", "blue", "green"]
}

Parent.prototype.getName = function () {
  console.log(this.name)
}

function Child(name, age) {
  Parent.call(this, name)
  this.age = age
}

// 关键的三步
var F = function () {}

F.prototype = Parent.prototype

Child.prototype = new F()

var child1 = new Child("kevin", "18")

console.log(child1)
