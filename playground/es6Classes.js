// set up constructor to take name and age (default age to 0)
// new method getDescription 'name is age years old.'

class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `Hi, I'm ${this.name}`
    }
    getDescription(){
        return `${this.name} is ${this.age} years old`
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age)
        this.major = major
    }
    hasMajor(){
        return !!this.major
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor){
            description = description += ` Their major is ${this.major}`
        }
        return description;
    }
}

class Traveler extends Person {
     constructor(name, age, location){
         super(name, age)
         this.location = location
     }
     getGreeting(){
         let greeting = super.getGreeting();
         greeting = greeting += ` I'm from ${this.location}`
         return greeting;
     }
}

// Traveler - extends person class
// add support for home location (third argument for class)
// override getGreeting 
// if home location then add "I'm visiting from ${location}"

const me = new Traveler('Jesse Woody', 41, 'Charlottesville');

console.log(me.getGreeting())

const other = new Traveler('Jimmy Jammy', 14)

console.log(other.getGreeting())