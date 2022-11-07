//Maria has just started her graduation in the medicine college and need your help to organize the experiments of a lab in which she is 
//responsible. She wants to know, at the end of the year, 
//how many samples were used in the lab and  the percentage of each sample used. 
//This lab uses 3 types of samples: frogs, rats and rabbits. To get these information, she knows exactly the 
//number of sample and experiments that were carried out. Create a program to read an integer value N that indicates all the cases that will 
//be carried out next. Each case contains an integer that stands for the number of samples 
//used and a string value (RABBIT, RAT or FROG) that indicates the type of sample. Create a program that print out on the screen the total number 
//of sample used, the total of each type of sample used and the percentage of each type of sample (regarding the total of samples used). 
//The percentage must be printed out on the screen with 2 decimal places.



let number = parseInt(prompt("Type the number of tests"));
let samples = 0;
let rabbits = 0;
let rats = 0;
let frogs = 0;
let total = 0;
for(let i = 0; i < number; i++) {
 samples = parseInt(prompt("Type the number of samples"))
 type = prompt("Type the type of sample (RABBIT, RAT OR FROG)").toUpperCase();
 if ( type === 'RABBIT') {
    rabits = rabbits + samples
 } else if ( type === 'RAT') {
    rats = rats + samples
 } else if ( type === 'FROG') {
    frogs = frogs + samples
 }
 total = total + samples
}
let percentRabbits = (rabits/total)*100;
let percentRats = (rats/total)*100;
let percentFrogs = (frogs/total)*100;

console.log("FINAL REPORT")
console.log("TOTAL = " + total + " SAMPLES")
console.log("TOTAL OF RABBITS = " + rabbits)
console.log("TOTAL OF RATS = " + rats)
console.log("TOTAL OF FROGS = " + frogs)
console.log("PERCENTAGE OF RABBITS = " + percentRabbits.toFixed(2));
console.log("PERCENTAGE OF RATS = " + percentRats.toFixed(2));
console.log("PERCENTAGE OF FROGS =" + percentFrogs.toFixed(2));
