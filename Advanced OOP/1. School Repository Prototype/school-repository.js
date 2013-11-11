var Person = {
  initialise: function(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  },
  introduce: function() {
    var fullName = this.firstName + " " + this.lastName;
    return "Name: " + fullName + ", age: " + this.age;
  }
};

var Student = Person.extend({
  initialise: function(firstName, lastName, age, grade) {
    this._super = Object.create(this._super);
    this._super.initialise(firstName, lastName, age);
    this.grade = grade;
  },
  introduce: function(){
    return this._super.introduce() + ", grade: " + this.grade;
  }
});

var Teacher = Person.extend({
  initialise: function(firstName, lastName, age, specialty) {
    this._super = Object.create(this._super);
    this._super.initialise(firstName, lastName, age);
    this.specialty = specialty;
  },
  introduce: function(){
    return this._super.introduce() + ", specialty: " + this.specialty;
  }
});

var Class = {
  initialise: function(name, capacity, studentsSet, formTeacher) {
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
};

var School = {
  initialise: function(name, town, classes) {
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
};

var joro = Object.create(Student);
joro.initialise("Georgi", "Georgiev", 17, 11);
var pesho = Object.create(Student);
pesho.initialise("Pesho", "Peshev", 18, 11);
var niki = Object.create(Teacher);
niki.initialise("Nikolay", "Kostov", 22, "Computer Science");

var cSharpClass = Object.create(Class);
cSharpClass.initialise("C-Sharp", 10,
  new Array(joro, pesho), niki);

var kiro = Object.create(Student);
kiro.initialise("Kiril", "Kirov", 16, 10);
var nedko = Object.create(Student);
nedko.initialise("Nedko", "Nedev", 15, 10);
var doncho = Object.create(Teacher);
doncho.initialise("Doncho", "Minkov", 24, "Web Development");

var javaScriptClass = Object.create(Class);
javaScriptClass.initialise("JavaScript", 7,
  new Array(kiro, nedko), doncho);

var telerikAcademySchool = Object.create(School);
telerikAcademySchool.initialise("Telerik Software Academy", "Sofia",
  new Array(cSharpClass, javaScriptClass));

console.log(telerikAcademySchool.introduce());