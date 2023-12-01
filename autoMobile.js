function Automobile(name, brand) {
  this.name = name;
  this.brand = brand;
}

Automobile.prototype.start = function() {
  console.log(`${this.name} is starting.`);
};

Automobile.prototype.stop = function() {
  console.log(`${this.name} is stopping.`);
};

function FourWheeler(name, brand, numOfWheels) {
  Automobile.call(this, name, brand);
  this.numOfWheels = numOfWheels || 4;
}

FourWheeler.prototype = Object.create(Automobile.prototype);

const sedan = new FourWheeler("", "Toyota");

sedan.start();
sedan.stop(); 

console.log(`${sedan.name} has ${sedan.numOfWheels} wheels.`);
