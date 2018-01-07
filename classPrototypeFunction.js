'use strict';

//PROTOTYPE

const ObjProto = {
  constructor: function(name, age){
    this.name = name;
    this.age = age;
    return this;
  },
  greet: function(){
    console.log('Hi, my name is ' + this.name)
  }
};


const obj = Object.create(ObjProto).constructor('Violetta', 17);

// console.log(obj.name); //Violetta
// obj.greet();

const Obj1 = Object.create(ObjProto);
Obj1.constructor = function(name, age, skills){
	ObjProto.constructor.apply(this, arguments);
	this.skills = skills || [];
	return this;
};

const anotherObj1 = Object.create(Obj1).constructor('Amili', 18, ['JS']);
//console.log(anotherObj1.skills);


//ANOTHER!!!

const AnotherProto = function(name){
	this.name = name;
};

AnotherProto.prototype.tellName = function(){
	console.log('My name is ' + this.name);
};

const Developer = function(neme, skill){
	AnotherProto.apply(this, arguments);
	this.skill = skill || [];
};

Developer.prototype = Object.create(AnotherProto.prototype);
Developer.prototype.constructor = Developer;
const developer = new Developer('Bob', ['php', 'js']);
//console.log(developer.skill);

const person = new AnotherProto('Sandra');
//person.tellName();

// console.log(person instanceof AnotherProto); //true
// console.log(AnotherProto.prototype.isPrototypeOf(person));  //true


//CLASS

function Animal (name) {
  this.name = name;  
}
Animal.prototype.speak = function () {
  console.log(this.name + ' makes a noise.');
}

class Dog extends Animal {
  speak() {
    super.speak();
    console.log(this.name + ' barks.');
  }
}

const d = new Dog('Mitzie');
//d.speak();






class Polygon {
  constructor(height, width) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log('Hi, I am a ', this.name + '.');
  }
}

class Square extends Polygon {
  constructor(length) {
     super(length, length);
  }

  get area() {
    return this.height * this.width;
  }

  set area(value) {
    this.height = this.width = Math.sqrt(value);
  } 
}
const square = new Square(5);
//console.log(square.area); //25