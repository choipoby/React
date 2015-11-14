// Ractangle Object
function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.getArea = function() {
  return this.length * this.width;
}

Rectangle.prototype.toString = function() {
  return "Rectangle :" + this.length + "x" + this.width;
}

/*
// this has to be prototype. Without a object instantiation, we can not make a object property
Rectangle.sayName = function() {
  return "Rectangle";
}
*/
Rectangle.prototype.sayName = function() {
  return "Rectangle";
}

// Square Object
function Square(size) {
  this.length = size;
  this.width = size;
}

// prototype inheritance
Square.prototype = Object.create(Rectangle.prototype, {
    constructor: {
      configurable: true,
      enumerable: true,
      value: Square,
      writable: true
    }
});

Square.prototype.toString = function() {
  return "Square :" + this.length + "x" + this.width;
}

//
// application

// Prototype inheritance / Construct inheritance
// prototype만 inheritance 한다.

var rectangle = new Rectangle(4,2);
rectangle.sayHello = function(){
  return "Hello Rectangle";
}
console.log(rectangle.toString());
console.log(rectangle.sayHello());

var square = new Square(4);
console.log(square.toString());
//console.log(square.sayHello()); // <<---- this will error

// Object inheritance - Object전체를 inheritance한다
var square2 = Object.create(rectangle);
console.log(square2.toString());
console.log(square2.sayHello());
