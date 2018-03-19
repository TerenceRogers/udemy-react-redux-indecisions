
class Person {
  constructor(name = 'nameless', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi, I am ${this.name}.`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year${this.age === 1 ? '' : 's'} old.`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` Their major is ${this.major}`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation = 'places unknown') {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  hasHomeLocation() {
    return !!this.homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.hasHomeLocation()) {
      greeting += ` I am visiting from ${this.homeLocation}.`;
    }
    return greeting;
  }
}

const me = new Traveler('Terence Rogers', 38, 'Seattle');
console.log(me.getGreeting());

const betterMe = new Traveler('Lydia Rogers', 37, 'Seattle');
console.log(betterMe.getGreeting());

const namelessOne = new Traveler();
console.log(namelessOne.getGreeting());