//http://jsfiddle.net/2ntKA/

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