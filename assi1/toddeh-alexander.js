/*
✅ 1.Create a class Student with the following properties:

✅ 2.firstName: Represents the first name of the student.

✅ 3.lastName: Represents the last name of the student.

✅ 4.studentNumber: Represents the student number. 

✅ 5.Add a method printFullName to the prototype of the Student class that prints the full name of the student.

✅ 6.Add another method getStudentNumberLastTwoDigits to the prototype that returns the last two digits of the student number.

✅ 7.Create an instance of the Student class with your own first name, last name, and the last two digits of your student number.

✅ 8.Call the printFullName method on the instance to print the full name.

✅ 9.Call the getStudentNumberLastTwoDigits method on the instance and store the result in a variable called lastTwoDigits.

✅ 10.Use the ternary operator to determine if the length of your full name is greater or equal to the lastTwoDigits. Save the result in a variable called comparisonResult.

✅ 11.Print the results, including the full name, the last two digits, and the comparison result.

✅ 12.Save your script as your firstName-lastName.js (e.g. hamid-ebrahimi.js)

✅ 13.Run your code and take a screenshot showing what were asked above and call it firstName-lastName.png (e.g. hamid-ebrahimi.png)

✅ 14.Upload both files on canvas.
*/

/*1*/
class Student {
    constructor(firstName, lastName, studentNumber) {
        /*2*/
        this.firstName = firstName;
        /*3*/
        this.lastName = lastName;
        /*4*/
        this.studentNumber = studentNumber;
    }
}

/*5*/
Student.prototype.printFullName = function() {
    console.log(`${this.firstName} ${this.lastName}`);
}

/*6*/
Student.prototype.getStudentNumberLastTwoDigits = function() {
    const lastTwoDigits = this.studentNumber % 100;
    //I needed to add the if statment to make sure that the ID number was presented properly if the last two digits were less than 10. I was having an issue where it was only printing '6' instead of '06' in my case particularly.
    if(lastTwoDigits < 10) {
        return "0" + lastTwoDigits;
    } else {
        return lastTwoDigits;
    }
};

/*7*/
const myFirstName = "Toddeh";
const myLastName = "Alexander";
const myStudentNumber = 885491506;
const myStudent = new Student(myFirstName, myLastName, myStudentNumber);

/*8*/
myStudent.printFullName();

/*9*/
const lastTwoDigits = myStudent.getStudentNumberLastTwoDigits();

/*10*/ //console.log("Full Name Length:", fullNameLength);
const fullNameLength = (myStudent.firstName+myStudent.lastName).length;
const comparisonResult = (fullNameLength >= lastTwoDigits) ? "Full Name length is greater or equal to last two digits of student number" : "Full Name length is less than last two digits of student number";

/*11*/
console.log("Last Two Digits of Student Number:", lastTwoDigits);
console.log("Comparison Result:", comparisonResult);
