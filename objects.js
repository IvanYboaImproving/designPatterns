let obj = {
    name: 'Ivan',
    lastName: 'Yboa',
    Age: 29
}; // Regular form of declaring objects

let objTwo = {};
objTwo.param = 'new value';
console.log(objTwo.param); //OR console.log(objTwo) to show the whole object
//Another way to declare params to the object.

let objThree = {};
objThree['name'] = 'some guy';
objThree['lastname'] = 'Doe';
console.log(objThree['name']); //OR console.log(objThree) to show the whole object


let nextObj = Object.create(Object.prototype);


let lastObj = new Object();