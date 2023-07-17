// Tperscript datatypes...
let id: number = 1;
let username: string = 'Jeeban';
let isComplete: boolean = true;
let x: any = "Giri"
x= 4;

let ids: number[] =[1,2,3,4,5]
ids.push(6)

let arr : any[] = ['Jeeban', "Giri", 5, true] 

// Tuples 
let person: [number, Boolean, string] = [1, true, "Giri"]

// Tuples Array
let cars: [number, string][]

cars = [
    [1, "BMW"],
    [2, "Royals Royal"],
    [3, "Lamborghini Veneno"]
]


// Union
 let empid: number | string

 empid = "22"

//enum
 enum direction{
    east = 10,               // by default it's value is 0
    west,
    north,
    south
 }
 console.log(direction.east);
 console.log(direction.south);


 enum direction2{
    east = "Itahari",
    west = "Ktm",
    north = "Pokhara",
    south = "mahakali"
 }
console.log(direction2.east);
console.log(direction2.west);


// Object
let users: {
id: number, 
name: string,
} 
users={
    id: 1,
    name: "Jeeban"
}


type Car = {
    id: number,
    name: string
}

const car: Car ={
    id: 2,
    name:'bmw'
}


// Type Assertion
let newId: any = 1;

// Two way to change the type of variable as we first decare it types as any.
// first way
let newId2 = <string | number>newId 

// second way
// let newId2 = newId as string | number

// Return Functions
function addString(firstname: string, lastname: string): string{
    return firstname + " " + lastname
}
console.log(addString("Jeeban", "Giri"));

// Void Function

function keeper(notification: string | number): void{
    console.log(notification)
}
keeper("three")


// Interface 
// [Note:] It is use with the object but not use in union.
// We can use interface here..
interface personInterface{
    id: number,
    name: string,
    readonly age: number
}


const person1 : personInterface ={
    id: 1,
    name: 'Jeeban',
    age: 20
}

// person1.age=25;              we cannot change this because it property is readonly..

// we cannot use the interface here..becoz it is union..
// interface person2 = number | string
// const p1: person2 = 2;

// we can use type here...
type person3 = number | string
const p3 : person3 = "BMW"


// Using interface with function
interface myFun {
    (a: number, b: number): number
}

const mul: myFun = (a: number, b: number): number => a*b
const div: myFun = (a:number, b: number): number => a/b


// Classes In typescript and using interface and extend (OOPS Concept)

// interface AnimalInterface{
//     id: number,
//     name: string,
//     eat(): string
// }

class Animal{
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id= id;
        this.name= name;
        console.log(`The id of cat is: ${id}`)
    }
    eat(): string{
        return `${this.name} is eating milk..`
    }
}
const cat = new Animal(1, "cat");
console.log(cat.eat())              // Method Calling...


class Dog extends Animal{
     color: string
     constructor(id: number, name: string, color: string){
        super(id, name);
        this.color= color;
    }
     bark(){
        console.log(`The ${this.name} is barking at night.`);
     }
}

const dog = new Dog(2, "Puppy", "grey");
dog.bark();
console.log(dog.eat());


// Generics         use to build resuable component..
// it does not throw error
function getArray(items: any[]): any[]{
    return new Array().concat(items)
}
const numArray = getArray([1,2,3,4,5])
const strArray = getArray(["Ripes", "Jibs", "Ayus"])
numArray.push('Ronim');
console.log(getArray);




// It throws error because we cannot push the string array into number type array..

// function getArrays<T>(item: T[]): T[]{
//     return new Array().concat(item)
// }
// const numArrays = getArrays<number>([1,2,3,4,5])
// const strArrays = getArrays<string>(["Ripes", "Jibs", "Ayus"])
// numArrays.push('Ronim');

// we can push the number types into numArray like this:
// numArrays.push(6)
