class Parent {
  constructor() {
    this.faterName = "Schwerznegger";
  }
}
class Child extends Parent {
  constructor(name) {
    super();
    this.name = name;
    // write function inside class with inheritence from other class
  }
  getFullName() {
    return this.name + " " + this.faterName;
  }
}
const baby = new Child("arnold");
const baby2 = new Child("tom");
console.log(baby.getFullName());
console.log(baby2);
