"use strict";
// Tperscript datatypes...
let id = 1;
let username = 'Jeeban';
let isComplete = true;
let x = "Giri";
x = 4;
let ids = [1, 2, 3, 4, 5];
ids.push(6);
let arr = ['Jeeban', "Giri", 5, true];
// Tuples 
let person = [1, true, "Giri"];
// Tuples Array
let cars;
cars = [
    [1, "BMW"],
    [2, "Royals Royal"],
    [3, "Lamborghini Veneno"]
];
// Union
let empid;
empid = "22";
//enum
var direction;
(function (direction) {
    direction[direction["east"] = 10] = "east";
    direction[direction["west"] = 11] = "west";
    direction[direction["north"] = 12] = "north";
    direction[direction["south"] = 13] = "south";
})(direction || (direction = {}));
console.log(direction.east);
console.log(direction.south);
var direction2;
(function (direction2) {
    direction2["east"] = "Itahari";
    direction2["west"] = "Ktm";
    direction2["north"] = "Pokhara";
    direction2["south"] = "mahakali";
})(direction2 || (direction2 = {}));
console.log(direction2.east);
console.log(direction2.west);
// Object
let users;
users = {
    id: 1,
    name: "Jeeban"
};
const car = {
    id: 2,
    name: 'bmw'
};
// Type Assertion
let newId = 1;
// Two way to change the type of variable as we first decare it types as any.
// first way
let newId2 = newId;
// second way
// let newId2 = newId as string | number
// Return Functions
function addString(firstname, lastname) {
    return firstname + " " + lastname;
}
console.log(addString("Jeeban", "Giri"));
// Void Function
function keeper(notification) {
    console.log(notification);
}
keeper("three");
const person1 = {
    id: 1,
    name: 'Jeeban',
    age: 20
};
const p3 = "BMW";
const mul = (a, b) => a * b;
const div = (a, b) => a / b;
// Classes In typescript and using interface and extend (OOPS Concept)
// interface AnimalInterface{
//     id: number,
//     name: string,
//     eat(): string
// }
class Animal {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        console.log(`The id of cat is: ${id}`);
    }
    eat() {
        return `${this.name} is eating milk..`;
    }
}
const cat = new Animal(1, "cat");
console.log(cat.eat()); // Method Calling...
class Dog extends Animal {
    constructor(id, name, color) {
        super(id, name);
        this.color = color;
    }
    bark() {
        console.log(`The ${this.name} is barking at night.`);
    }
}
const dog = new Dog(2, "Puppy", "grey");
dog.bark();
console.log(dog.eat());
// Generics         use to build resuable component..
// it does not throw error
function getArray(items) {
    return new Array().concat(items);
}
const numArray = getArray([1, 2, 3, 4, 5]);
const strArray = getArray(["Ripes", "Jibs", "Ayus"]);
numArray.push('Ronim');
// It throws error because we cannot push the string array into number type array..
// function getArrays<T>(item: T[]): T[]{
//     return new Array().concat(item)
// }
// const numArrays = getArrays<number>([1,2,3,4,5])
// const strArrays = getArrays<string>(["Ripes", "Jibs", "Ayus"])
// numArrays.push('Ronim');
// we can push the number types into numArray like this:
// numArrays.push(6)
