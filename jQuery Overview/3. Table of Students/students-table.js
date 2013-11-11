var Student = function(firstName, lastName, grade){
    this.firstName = firstName;
    this.lastName = lastName;    
    this.grade = grade;
  };

var joro = new Student("Georgi", "Georgiev", 5);
var pesho = new Student("Pesho", "Peshev", 4);
var kiro = new Student("Kiril", "Kirov", 6);
var nedko = new Student("Nedko", "Nedev", 5);

var studentsSet = new Array(joro, pesho, kiro, nedko);
for (var i = 0; i < studentsSet.length; i++) {
	var studFirstName = studentsSet[i].firstName;
	var studLastName = studentsSet[i].lastName;
	var studGrade = studentsSet[i].grade;
	var newTableRowData = "<tr>" + "<td>" + studFirstName + 
		"</td>" + "<td>" + studLastName + "</td>" +
		"<td>" + studGrade + "</td>" + "</tr>";

	$("#table").append(newTableRowData);
};