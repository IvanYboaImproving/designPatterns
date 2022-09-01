function User() {
    this.name = 'John';
    this.age = 20;
    this.gender = 'male'
};

let personOne = new User();
let personTwo = new User();

console.log(personOne);
console.log(personTwo);

function Users (name, age) {
    this.name = name;
    this.age = age;
}

let user1 = new Users('Bob', 25);
let user2 = new Users('Alice', 27);

console.log(user1);
console.log(user2);