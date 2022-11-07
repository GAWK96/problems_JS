//Create a program to read a set of N names of students and their grades, that they took
//in the first and second semester. Each one of these information must be stored in a different vector. 
//Then, print out on the screen the names of the students that were approved, regarding approved 
//the ones whose the average of the grades is greater or equal to 6 (six).

let times = parseInt(prompt("How many students will be typed?"));
let name1 = [];
let firstGrade = [];
let secondGrade = [];
let average = [];
let sumGrades = [];
console.log(" ")
for(let i = 0; i < number1; i++) {
    name1[i] = (prompt("Type the name of the student"));
    console.log("Name of the student = " + name1[i]);
    firstGrade[i] = parseFloat(prompt("Type the first grade"))
    console.log("First Grade = " + firstGrade[i]);
    secondGrade[i] = parseFloat(prompt("Type the second grade"))
    console.log("Second Grade = " + secondGrade[i]);
    sumGrades[i] = parseFloat(firstGrade[i] + secondGrade[i])
    average[i] = parseFloat(sumGrades[i]/2)
}
console.log(" ")
console.log("STUDENTS APPROVED = ")
for(let i = 0; i < number1; i++){
    if (average[i] >= 6.0) {
        console.log(name1[i]);
    }
}
