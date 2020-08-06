const myfunction = function (num) {
  return num * 2;
};

const result = myfunction(15);

//

const newFunction = (num) => num * 50;
const printnew = newFunction(12);

//
const add = (x, y) => x + y;
const addnew = add(12, 50);

//
const num = [48, 29, 20, 593, 0234];
const findmax = Math.max(...num);
//
class student {
  constructor(studentID, studentName) {
    this.id = studentID;
    this.name = studentName;
    this.school = "lalmatia";
  }
}
const student1 = new student(12, "subo");
const student2 = new student(14, "neme");
//
