// inheritance:
// Inheritance is a fundamental concept in object-oriented programming that allows a new class to be based on an existing class.
// It enables a new class to inherit properties and methods from the existing class, reducing code duplication and promoting code reuse.
// The existing class is called the parent class (or base class), and the new class is called the child class (or derived class).
// Inheritance supports the "is-a" relationship, where a child class is a specialized version of a parent class.
// It allows for code reuse and makes the code more organized and easier to maintain.
// In JavaScript, inheritance is implemented using the extends keyword.

class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(`${this.name} is eating.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  bark() {
    console.log(`${this.name} is barking.`);
  }
}

const dog = new Dog("Buddy", "Golden Retriever");
dog.eat(); // Output: Buddy is eating.
dog.bark(); // Output: Buddy is barking.
