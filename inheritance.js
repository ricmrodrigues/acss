//http://stackoverflow.com/questions/4152931/javascript-inheritance-call-super-constructor-or-use-prototype-chain
//http://stackoverflow.com/questions/3079887/javascript-inheritance-with-object-create

//using prototype
function Vehicle() {    
    console.log("vehicle ctor");
}
Vehicle.prototype = {
    topSpeed: 200
};

function Car() {
    console.log("car ctor");
    Vehicle.call(this, arguments);
}

function surrogateCtor() {}

function extend(base, sub) {
  // Copy the prototype from the base to setup inheritance
  surrogateCtor.prototype = base.prototype;
  // Tricky huh?
  sub.prototype = new surrogateCtor();
  // Remember the constructor property was set wrong, let's fix it
  sub.prototype.constructor = sub;
}

extend(Vehicle, Car);

var x = new Car();
alert(x.topSpeed);

console.log(x instanceof Car);



//using Object.create() => constructors are lost
var A = function() { };
A.prototype.x = 10;
A.prototype.say = function() { alert(this.x) };

var a = new A();
a.say(); //alerts 10

var b = Object.create(a);
b.say(); //alerts 10
b.x = 'hello';
b.say(); //alerts 'hello'




//setters and getters
Field.prototype = {
    get value(){
        return this._value;
    },
    set value(val){
        this._value = val;
    }
};