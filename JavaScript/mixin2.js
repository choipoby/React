function Human() {
}

Human.prototype = {
  constructor : Human,
  speak : function() { console.log("hello");}
};

function Dog() {
}
Dog.prototype = {
  constructor: Dog,
  bark: function() { console.log("bark");}
}
/*
var sekwon = new Human();
sekwon.speak();
var dog= new Dog();
dog.speak();
*/
function mixin(receiver, supplier){
  for (var property in supplier) {
    //if (supplier.hasOwnProperty(property)) {
      receiver[property] = supplier[property];
    //}
  }
  return receiver;
}

var dogboy = mixin(new Human(),  new Dog());
dogboy.speak();
dogboy.bark();
