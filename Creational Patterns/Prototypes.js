// constructor function
function Person () {
    this.name = 'John',
    this.age = 23
};

// creating objects
const person1 = new Person();
const person2 = new Person();

// adding a couple of properties to constructor function
Person.prototype.legs = 2;
Person.prototype.gender = 'male';

// prototype value of Person
console.log(Person.prototype);

// inheriting the property from prototype
console.log(person1);
console.log(person1.legs);
console.log(person2.gender);