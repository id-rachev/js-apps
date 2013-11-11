var Person = ClassObj.create({
  initialize: function(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  },
  introduce: function() {
    var fullName = this.firstName + " " + this.lastName;
    return "Name: " + fullName + ", age: " + this.age;
  }
});

var Student = ClassObj.create({
  initialize: function(firstName, lastName, age, grade) {
    this._super.initialize(firstName, lastName, age);
    this.grade = grade;
  },
  introduce: function(){
    return this._super.introduce() + ", grade: " + this.grade;
  }
});

Student.inherit(Person);

var Teacher = ClassObj.create({
  initialize: function(firstName, lastName, age, specialty) {
    this._super.initialize(firstName, lastName, age);
    this.specialty = specialty;
  },
  introduce: function(){
    return this._super.introduce() + ", specialty: " + this.specialty;
  }
});

Teacher.inherit(Person);

var Class = ClassObj.create({
  initialize: function(name, capacity, studentsSet, formTeacher) {
    this.name = name;
    this.capacity = capacity;
    this.studentsSet = studentsSet;
    this.formTeacher = formTeacher;
  },
  introduce: function() {
    var name = "Class name: " + this.name + ",\n";
    var capacity = "Class capacity: " + this.capacity + ",\n";
    var formTeacher = "Form-teacher: " + this.formTeacher.introduce() + ",\n";
    var students = "Students:\n";
    for (var i = 0; i < this.studentsSet.length; i++) {      
      students += this.studentsSet[i].introduce() + "\n";
    };
    return name + formTeacher + capacity + students;
  }
});

var School = ClassObj.create({
  initialize: function(name, town, classes) {
    this.name = name;
    this.town = town;
    this.classes = classes;
  },
  introduce: function() {
    var name = "School name: " + this.name + ",\n";
    var town = "Town: " + this.town + ",\n";
    var classesStr = "Classes:\n\t";
    for (var i = 0; i < this.classes.length; i++) {
      classesStr += this.classes[i].introduce() + "\n\t";
    };
    return name + town + classesStr;
  }
});

var joro = new Student("Georgi", "Georgiev", 17, 11);
var pesho = new Student("Pesho", "Peshev", 18, 11);
var niki = new Teacher("Nikolay", "Kostov", 22, "Computer Science");

var cSharpClass = new Class("C-Sharp", 10,
  new Array(joro, pesho), niki);

var kiro = new Student("Kiril", "Kirov", 16, 10);
var nedko = new Student("Nedko", "Nedev", 15, 10);
var doncho = new Teacher("Doncho", "Minkov", 24, "Web Development");

var javaScriptClass = new Class("JavaScript", 7,
  new Array(kiro, nedko), doncho);

var telerikAcademySchool = new School("Telerik Software Academy", "Sofia",
  new Array(cSharpClass, javaScriptClass));

console.log(telerikAcademySchool.introduce());