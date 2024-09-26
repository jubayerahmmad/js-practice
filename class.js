// class:
// A class is a blueprint for creating objects. It defines a set of properties and methods that the objects created from it will have.
// Classes are used to create objects with similar structures and behaviors.
// They provide a way to encapsulate data and functionality together, making the code more organized and reusable.
// Classes are defined using the class keyword.
// They can have constructors to initialize objects, and methods to define their behavior.
// Classes support inheritance, allowing new classes to be based on existing ones, inheriting their properties and methods.
// They also support polymorphism, allowing methods to be overridden by subclasses.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const person = new Person("John", 30);
person.greet(); // Output: Hello, my name is John and I am 30 years old.
